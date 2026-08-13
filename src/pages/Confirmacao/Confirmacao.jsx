/**
 * Tela Confirmação (/checkout/confirmacao) — node 30:5633.
 *
 * Mesma casca do checkout: Header e Footer do site, e dentro do container a
 * barra com o wordmark (CheckoutHeader) e o stepper, agora no passo 4. Abaixo,
 * o mesmo grid de 12 colunas com gutter de 48px — 7 para o conteúdo, 5 para o
 * resumo.
 *
 * SEM ÍCONE DE SUCESSO: o node não tem ilustração nenhuma. A coluna começa
 * direto em "Pedido Concluído!" e "Obrigado, {nome}!", dois títulos Playfair de
 * 24/32 com tracking -0.24px.
 *
 * DADOS: vêm inteiros do state da rota, montado pelo /checkout — a sacola já
 * foi esvaziada quando esta tela monta, então não há o que ler do CartContext.
 * Sem esse state a tela não tem pedido para mostrar (acesso direto pela URL,
 * reload, link colado), e volta para a Home.
 *
 * O que o design fixa como texto e NÃO é derivado do pedido:
 * - a observação "Deixar na portaria com a senha 256" (30:5688) — o formulário
 *   do checkout (node 30:5326) não tem campo de observação de entrega;
 * - o "7 Dias" de "Prazo de envio" (30:5741), que não bate com nenhum dos dois
 *   modos de envio do design (5–8 e 2–3 dias úteis, nodes 30:5430/30:5440).
 * Os dois foram mantidos literais, como no node.
 */

import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import Button from '../../components/ui/Button.jsx'
import CheckoutHeader from '../Pedido/CheckoutHeader.jsx'
import CheckoutSteps from '../Pedido/CheckoutSteps.jsx'
import OrderSummary from '../Pedido/OrderSummary.jsx'
import { formatDataPedido } from '../../lib/format.js'

const TITULO = 'font-display text-24 tracking-[-0.24px] text-ink'

/** Linhas do card: rótulo à esquerda, valor à direita, tudo em caixa alta. */
function LinhaDetalhe({ label, children }) {
  return (
    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 text-12 uppercase tracking-[1.8px] text-ink-60">
      <span>{label}</span>
      <span>{children}</span>
    </div>
  )
}

function Confirmacao() {
  const { state } = useLocation()
  const navigate = useNavigate()

  if (!state?.numeroPedido) {
    return <Navigate to="/" replace />
  }

  const { numeroPedido, nome, items, subtotal, frete, prazoEntrega, confirmadoEm } =
    state

  return (
    <Container className="flex flex-col gap-10 py-12">
      <CheckoutHeader />

      <CheckoutSteps atual={4} />

      <div className="grid gap-12 pt-2 desktop:grid-cols-12">
        <div className="flex flex-col gap-10 desktop:col-span-7">
          <h1 className={TITULO}>Pedido Concluído!</h1>

          {/* Saudação, não seção: o node marca como h2, mas empilhar dois
              títulos de mesmo nível sem conteúdo embaixo só atrapalha a
              navegação por headings. O visual é o mesmo. */}
          <p className={TITULO}>Obrigado, {nome}!</p>

          <div className="flex flex-col gap-4 rounded-media border border-ink-15 bg-cream p-[21px]">
            <p className="text-14 font-medium text-ink">Pedido {numeroPedido}</p>

            <div className="flex flex-col gap-[15.5px]">
              <LinhaDetalhe label="Pagamento confirmado">
                {formatDataPedido(confirmadoEm)}
              </LinhaDetalhe>

              <LinhaDetalhe label="Entrega estimada">
                {prazoEntrega}
              </LinhaDetalhe>

              <LinhaDetalhe label="Detalhes:">
                Deixar na portaria com a senha 256
              </LinhaDetalhe>
            </div>
          </div>

          {/* O node não diz para onde o botão leva. Mandamos para o Perfil, que
              é onde mora o histórico de pedidos (src/data/orders.js). */}
          <Button
            type="button"
            variant="cta"
            size="md"
            className="w-full"
            onClick={() => navigate('/perfil')}
          >
            Recebi meu pedido!
          </Button>
        </div>

        <aside className="desktop:col-span-5">
          <OrderSummary
            titulo="Resumo do pedido"
            items={items}
            subtotal={subtotal}
            frete={frete}
            prazo="7 Dias"
          />
        </aside>
      </div>
    </Container>
  )
}

export default Confirmacao
