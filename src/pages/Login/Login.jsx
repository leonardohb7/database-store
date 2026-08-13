/**
 * Tela Login (/entrar) — node 30:4113.
 *
 * A tela abre com o hero inteiro da Home (30:4117): mesmo H1, mesmo parágrafo,
 * mesmo mosaico e a mesma faixa de selos, trocando o eyebrow por "ARTE SHOP" e
 * os CTAs por "Inscreva-se" / "Explorar". Por isso reusa `Home/Hero.jsx` com
 * props em vez de recortar uma versão só de texto — ver a nota lá.
 *
 * O bloco de autenticação vem abaixo. No Figma ele não está no fluxo: os oito
 * elementos são irmãos absolutos, posicionados à mão sobre o frame (nodes
 * 30:4163…30:4178, 30:4275, 30:4276), com uns 9px de tremida entre um e outro.
 * Aqui viram uma coluna centrada de 846px — que é a largura que o bloco ocupa
 * — com a mesma leitura: o par de ações no topo, o texto, os dois campos à
 * esquerda pareados com os botões sociais à direita e o CTA coral no fim.
 * O ritmo vertical (72 / 32 / 24 / 88px) arredonda o que os `top` absolutos
 * medem (74 / 33 / 22 / 91px).
 *
 * Larguras: o design desenha as pílulas do topo com 310px e os campos no
 * tamanho do conteúdo. Como aqui viram grid de duas colunas, cada um preenche
 * a sua — campo de formulário não pode ter largura de placeholder. A pílula
 * "Entrar:" mantém os 382px do node (30:4163).
 *
 * O node escreve "acomapanhar" em 30:4168; corrigido para "acompanhar".
 *
 * Autenticação falsa, sem backend: os TRÊS botões do design validam e caem em
 * /perfil. É o que o design comporta — ele desenha "Entrar" e "Criar conta" no
 * topo e "Entrar:" no fim, sem tela de cadastro em lugar nenhum do arquivo.
 */

import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import Container from '../../components/layout/Container.jsx'
import IconApple from '../../components/ui/icons/IconApple.jsx'
import IconGoogle from '../../components/ui/icons/IconGoogle.jsx'
import Hero from '../Home/Hero.jsx'
import AccountButton from './AccountButton.jsx'
import LoginField from './LoginField.jsx'
import SocialButton from './SocialButton.jsx'
import { validarCampo, validarTudo } from './loginForm.js'

/** CTAs do hero nesta tela (30:4126, 30:4129). "Inscreva-se" desce até o
 *  formulário: é a única inscrição que existe no site. */
const ACOES_HERO = [
  { label: 'Inscreva-se', variant: 'cta', as: 'a', href: '#entrar' },
  { label: 'Explorar', variant: 'ctaSecondary', as: Link, to: '/loja' },
]

/**
 * No design cada botão social nasce junto do campo da sua linha (30:4275 no
 * topo do Email, 30:4276 no da Senha). Alinhar pelo fim da linha não serve: a
 * mensagem de erro cresce embaixo do campo e empurraria o botão. Então ele
 * desce o mesmo tanto que o rótulo ocupa — 26px de linha + os 16px de gap.
 */
const ALINHA_CAMPO = 'tablet:mt-[42px] tablet:self-start'

/** O campo já vem preenchido no design (30:4167). */
const INICIAL = { email: 'seuemail@gmail.com', senha: '' }

function Login() {
  const navigate = useNavigate()

  const [valores, setValores] = useState(INICIAL)
  const [erros, setErros] = useState({})
  /* Um campo só começa a reclamar depois de perder o foco (ou depois de uma
     tentativa de envio). Daí em diante, revalida a cada tecla. */
  const [tocados, setTocados] = useState({})

  function alterar(nome, valor) {
    setValores((atuais) => ({ ...atuais, [nome]: valor }))

    if (tocados[nome]) {
      setErros((atuais) => ({ ...atuais, [nome]: validarCampo(nome, valor) }))
    }
  }

  /* O valor vem do evento, não de `valores`: se a digitação e o blur caírem no
     mesmo lote de render, o estado ainda é o anterior. */
  function borrar(nome, valor) {
    setTocados((atuais) => ({ ...atuais, [nome]: true }))
    setErros((atuais) => ({ ...atuais, [nome]: validarCampo(nome, valor) }))
  }

  function enviar(evento) {
    evento.preventDefault()

    const encontrados = validarTudo(valores)

    setTocados({ email: true, senha: true })
    setErros(encontrados)

    if (Object.keys(encontrados).length === 0) navigate('/perfil')
  }

  return (
    <>
      <Hero eyebrow="Arte shop" acoes={ACOES_HERO} />

      <Container as="section" id="entrar" className="pt-24 pb-12">
        <form
          onSubmit={enviar}
          noValidate
          className="mx-auto w-full max-w-[846px]"
        >
          <h2 className="sr-only">Entrar na sua conta</h2>

          <div className="grid gap-6 tablet:grid-cols-2 tablet:gap-x-16">
            <AccountButton type="submit" tom="entrar">
              Entrar
            </AccountButton>
            <AccountButton type="submit" tom="criar">
              Criar conta
            </AccountButton>
          </div>

          <p className="pt-[72px] text-16 text-ink-70">
            Para acompanhar pedidos, salvar favoritos e ter acesso a novas
            coleções:
          </p>

          <div className="grid gap-6 pt-8 tablet:grid-cols-2 tablet:gap-x-16">
            <LoginField
              label="Email:"
              type="email"
              name="email"
              autoComplete="email"
              value={valores.email}
              onChange={(e) => alterar('email', e.target.value)}
              onBlur={(e) => borrar('email', e.target.value)}
              error={erros.email}
            />

            <SocialButton icon={IconApple} className={ALINHA_CAMPO}>
              Continuar com Apple
            </SocialButton>

            <LoginField
              label="Senha:"
              type="password"
              name="senha"
              autoComplete="current-password"
              value={valores.senha}
              onChange={(e) => alterar('senha', e.target.value)}
              onBlur={(e) => borrar('senha', e.target.value)}
              error={erros.senha}
            />

            <SocialButton icon={IconGoogle} className={ALINHA_CAMPO}>
              Continuar com Google
            </SocialButton>
          </div>

          <div className="flex justify-center pt-22">
            <Button type="submit" variant="cta" className="w-[382px] max-w-full">
              Entrar:
            </Button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default Login
