/**
 * Tela Perfil (/perfil) — node 30:5842.
 *
 * Header e Footer padrão do site. Dentro do container, o h1 "Olá, Mariana" com
 * o subtítulo logo abaixo (8px) e, 40px depois, o grid de 12 colunas com gutter
 * de 40px: a nav ocupa 3 colunas e o conteúdo, 9.
 *
 * A troca de abas é estado local, sem rotas aninhadas — o node desenha só a
 * "Visão geral"; as outras cinco não têm tela no Figma e ficam como placeholder
 * com o mesmo heading da aba.
 *
 * A `aside` do node se chama "aside.hidden" (some no mobile), mas aqui ela
 * empilha acima do conteúdo em vez de sumir: esconder a nav deixaria as abas
 * inalcançáveis no celular. Mesma decisão do resumo em /checkout.
 */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import profile from '../../data/profile.js'
import ProfileNav from './ProfileNav.jsx'
import VisaoGeral from './VisaoGeral.jsx'
import { ABAS } from './abas.js'

function Perfil() {
  const navigate = useNavigate()
  const [aba, setAba] = useState('visao-geral')

  const { label } = ABAS.find(({ id }) => id === aba)

  return (
    <Container className="flex flex-col gap-2 py-12">
      <h1 className="font-display text-48 leading-[48px] tracking-display text-ink">
        Olá, {profile.firstName}
      </h1>

      <p className="text-16 leading-6 text-ink-70">
        Sua conta, pedidos e favoritos.
      </p>

      <div className="grid gap-10 pt-10 desktop:grid-cols-12">
        <aside className="desktop:col-span-3">
          <ProfileNav
            ativa={aba}
            onTrocar={setAba}
            /* Não há AuthContext no projeto: "Sair" só devolve para a Home. */
            onSair={() => navigate('/')}
          />
        </aside>

        <div className="desktop:col-span-9">
          {aba === 'visao-geral' ? (
            <VisaoGeral />
          ) : (
            <h2 className="font-display text-24 tracking-[-0.24px] text-ink">
              {label}
            </h2>
          )}
        </div>
      </div>
    </Container>
  )
}

export default Perfil
