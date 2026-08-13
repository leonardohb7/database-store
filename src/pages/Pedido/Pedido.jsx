/**
 * Tela Pedido (/checkout) — node 30:5326.
 *
 * O node mantém o Header e o Footer padrão do site e acrescenta, DENTRO do
 * container, a barra com o wordmark e "Conexão segura" (30:5330) e o stepper
 * de quatro passos (30:5336). Abaixo, grid de 12 colunas com gutter de 48px:
 * o formulário ocupa 7 colunas e o resumo, 5.
 *
 * A `aside` do node se chama "aside.hidden" (some no mobile), mas aqui ela só
 * empilha abaixo do formulário: esconder o resumo deixaria o total invisível
 * em telas pequenas, e as telas mobile são outros nodes (42:7210…44:8322).
 *
 * Os itens, o subtotal e o `clear` vêm do CartContext. O frete é o do modo de
 * envio escolhido, então o resumo e o texto do botão mudam junto.
 */

import { useRef, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import Button from '../../components/ui/Button.jsx'
import IconCartao from '../../components/ui/icons/IconCartao.jsx'
import { useCart } from '../../context/CartContext.jsx'
import { formatBRL } from '../../lib/format.js'
import CheckoutField from './CheckoutField.jsx'
import CheckoutHeader from './CheckoutHeader.jsx'
import CheckoutSteps from './CheckoutSteps.jsx'
import OrderSummary from './OrderSummary.jsx'
import ShippingOptions from './ShippingOptions.jsx'
import { MODOS_ENVIO } from './envio.js'
import {
  gerarNumeroPedido,
  mascaraCartao,
  mascaraCep,
  mascaraCvv,
  mascaraEstado,
  mascaraValidade,
  validarCampo,
  validarTudo,
} from './checkoutForm.js'

const TITULO_SECAO = 'font-display text-24 tracking-[-0.24px] text-ink'

const VALORES_INICIAIS = {
  email: '',
  nome: '',
  sobrenome: '',
  cep: '',
  endereco: '',
  numero: '',
  complemento: '',
  bairro: '',
  cidade: '',
  estado: '',
  cartaoNumero: '',
  cartaoNome: '',
  validade: '',
  cvv: '',
}

const MASCARAS = {
  cep: mascaraCep,
  estado: mascaraEstado,
  cartaoNumero: mascaraCartao,
  validade: mascaraValidade,
  cvv: mascaraCvv,
}

function Pedido() {
  const navigate = useNavigate()
  const { items, subtotal, clear } = useCart()

  const [valores, setValores] = useState(VALORES_INICIAIS)
  const [erros, setErros] = useState({})
  const [tocados, setTocados] = useState({})
  const [envio, setEnvio] = useState(MODOS_ENVIO[0].id)
  const [parcelar, setParcelar] = useState(false)
  /* Ligado junto com o `clear`, para o guarda de sacola vazia não roubar a
     navegação para a confirmação: as três atualizações caem no mesmo lote. */
  const [finalizado, setFinalizado] = useState(false)

  const formRef = useRef(null)

  const modoEnvio = MODOS_ENVIO.find((modo) => modo.id === envio)
  const frete = modoEnvio.preco
  const total = subtotal + frete

  /* O design não tem checkout de sacola vazia — não há o que revisar nem o que
     cobrar, então a tela devolve para a sacola. */
  if (items.length === 0 && !finalizado) {
    return <Navigate to="/sacola" replace />
  }

  const aoDigitar = (nome) => (evento) => {
    const mascara = MASCARAS[nome]
    const valor = mascara ? mascara(evento.target.value) : evento.target.value

    setValores((atuais) => ({ ...atuais, [nome]: valor }))

    /* Tempo real sem gritar: o campo só passa a ser conferido a cada tecla
       depois do primeiro blur — ou depois de um envio que falhou. */
    if (tocados[nome]) {
      setErros((atuais) => ({ ...atuais, [nome]: validarCampo(nome, valor) }))
    }
  }

  const aoSair = (nome) => () => {
    setTocados((atuais) => ({ ...atuais, [nome]: true }))
    setErros((atuais) => ({
      ...atuais,
      [nome]: validarCampo(nome, valores[nome]),
    }))
  }

  /** Props comuns dos campos — só o rótulo e o placeholder mudam. */
  const campo = (nome) => ({
    name: nome,
    value: valores[nome],
    error: erros[nome],
    onChange: aoDigitar(nome),
    onBlur: aoSair(nome),
  })

  function aoEnviar(evento) {
    evento.preventDefault()

    const encontrados = validarTudo(valores)

    setTocados(
      Object.fromEntries(Object.keys(VALORES_INICIAIS).map((n) => [n, true])),
    )
    setErros(encontrados)

    const primeiroErro = Object.keys(VALORES_INICIAIS).find(
      (nome) => encontrados[nome],
    )

    if (primeiroErro) {
      formRef.current?.elements[primeiroErro]?.focus()
      return
    }

    /* O `clear` abaixo esvazia o CartContext, então a confirmação não tem como
       reler a sacola: ela recebe um retrato fechado do pedido pelo state da
       rota. Os itens vão como estão (produtos do catálogo estático, objetos
       simples), o que o history do navegador serializa sem problema. */
    setFinalizado(true)
    clear()
    navigate('/checkout/confirmacao', {
      state: {
        numeroPedido: gerarNumeroPedido(),
        nome: valores.nome.trim(),
        items,
        subtotal,
        frete,
        prazoEntrega: modoEnvio.prazo,
        confirmadoEm: new Date().toISOString(),
      },
      replace: true,
    })
  }

  return (
    <Container className="flex flex-col gap-10 py-12">
      <CheckoutHeader />

      <CheckoutSteps atual={2} />

      <div className="grid gap-12 desktop:grid-cols-12">
        <form
          ref={formRef}
          noValidate
          onSubmit={aoEnviar}
          className="flex flex-col gap-10 desktop:col-span-7"
        >
          <section className="flex flex-col gap-4">
            <h2 className={TITULO_SECAO}>Contato</h2>

            <CheckoutField
              label="Email"
              type="email"
              autoComplete="email"
              placeholder="seu@email.com"
              {...campo('email')}
            />
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={TITULO_SECAO}>Endereço de entrega</h2>

            <div className="grid gap-4 tablet:grid-cols-2">
              <CheckoutField
                label="Nome"
                autoComplete="given-name"
                placeholder="Mariana"
                {...campo('nome')}
              />

              <CheckoutField
                label="Sobrenome"
                autoComplete="family-name"
                placeholder="Silva"
                {...campo('sobrenome')}
              />
            </div>

            <CheckoutField
              label="CEP"
              inputMode="numeric"
              autoComplete="postal-code"
              placeholder="01310-100"
              {...campo('cep')}
            />

            <CheckoutField
              label="Endereço"
              autoComplete="address-line1"
              placeholder="Av. Paulista, 1500"
              {...campo('endereco')}
            />

            <div className="grid gap-4 tablet:grid-cols-3">
              <CheckoutField
                label="Número"
                inputMode="numeric"
                placeholder="500"
                {...campo('numero')}
              />

              <CheckoutField
                label="Complemento"
                autoComplete="address-line2"
                placeholder="Apto 12"
                {...campo('complemento')}
              />

              <CheckoutField
                label="Bairro"
                placeholder="Bela Vista"
                {...campo('bairro')}
              />
            </div>

            <div className="grid gap-4 tablet:grid-cols-2">
              <CheckoutField
                label="Cidade"
                autoComplete="address-level2"
                placeholder="São Paulo"
                {...campo('cidade')}
              />

              <CheckoutField
                label="Estado"
                autoComplete="address-level1"
                placeholder="SP"
                {...campo('estado')}
              />
            </div>
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={TITULO_SECAO}>Modo de envio</h2>

            <ShippingOptions value={envio} onChange={setEnvio} />
          </section>

          <section className="flex flex-col gap-4">
            <h2 className={TITULO_SECAO}>Pagamento</h2>

            <div className="flex flex-col gap-4 rounded-media border border-ink-15 bg-cream p-[21px]">
              <div className="flex items-center gap-3">
                <IconCartao className="shrink-0 text-ink" />

                <span className="text-14 font-medium text-ink">
                  Cartão de crédito
                </span>
              </div>

              <div className="flex flex-col gap-[15.5px]">
                <CheckoutField
                  label="Número do cartão"
                  inputMode="numeric"
                  autoComplete="cc-number"
                  placeholder="0000 0000 0000 0000"
                  {...campo('cartaoNumero')}
                />

                <CheckoutField
                  label="Nome no cartão"
                  autoComplete="cc-name"
                  placeholder="MARIANA SILVA"
                  {...campo('cartaoNome')}
                />

                <div className="grid gap-4 tablet:grid-cols-2">
                  <CheckoutField
                    label="Validade"
                    inputMode="numeric"
                    autoComplete="cc-exp"
                    placeholder="MM/AA"
                    {...campo('validade')}
                  />

                  <CheckoutField
                    label="CVV"
                    inputMode="numeric"
                    autoComplete="cc-csc"
                    placeholder="000"
                    {...campo('cvv')}
                  />
                </div>

                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={parcelar}
                    onChange={(evento) => setParcelar(evento.target.checked)}
                    className="size-[13px] shrink-0 accent-coral"
                  />

                  <span className="text-14 text-ink">
                    Parcelar em até 6x sem juros
                  </span>
                </label>
              </div>
            </div>
          </section>

          <Button type="submit" variant="cta" size="md" className="w-full">
            Concluir pedido · {formatBRL(total)}
          </Button>
        </form>

        <aside className="desktop:col-span-5">
          <OrderSummary items={items} subtotal={subtotal} frete={frete} />
        </aside>
      </div>
    </Container>
  )
}

export default Pedido
