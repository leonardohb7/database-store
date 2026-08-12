/**
 * Header — node 30:4082 ("header.sticky") do Figma.
 *
 * 80px de altura + 1px de borda = 81px, fixo no topo, fundo creme a 85% com
 * blur de 6px. Wordmark à esquerda, nav ao centro, ações à direita.
 *
 * Nota: o Figma não tem estado de hover. O sublinhado + `mocha` dos links de
 * nav foi especificado à mão — ver o comentário do token em src/index.css.
 */

import { Link, NavLink } from 'react-router-dom'
import Container from './Container.jsx'
import IconBusca from '../ui/icons/IconBusca.jsx'
import IconConta from '../ui/icons/IconConta.jsx'
import IconFavoritos from '../ui/icons/IconFavoritos.jsx'
import IconSacola from '../ui/icons/IconSacola.jsx'

/** As categorias usam os slugs de src/data/categories.js. */
const navLinks = [
  { label: 'Loja', to: '/loja' },
  { label: 'Cerâmica', to: '/loja?categoria=ceramica' },
  { label: 'Joalheria', to: '/loja?categoria=joalheria' },
  { label: 'Têxteis', to: '/loja?categoria=texteis' },
  { label: 'Madeira', to: '/loja?categoria=madeira' },
  { label: 'Artesãos', to: '/artesaos' },
]

const navLinkClasses =
  'text-14 text-ink-70 underline-offset-4 transition-colors duration-200 ' +
  'hover:text-mocha hover:underline ' +
  'focus-visible:outline-none focus-visible:text-mocha focus-visible:underline'

const acaoClasses =
  'rounded-full p-2.5 text-ink transition-colors duration-200 hover:text-mocha ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral'

/** Fixo em 3 enquanto o CartContext não existe — é o valor do design (30:4112). */
const itensNaSacola = 3

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink-5 bg-cream-85 backdrop-blur-[6px]">
      <Container className="flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-24 text-ink">ArteShop</span>
          <span className="hidden text-10 uppercase tracking-caps-xwide text-slate tablet:block">
            Brasil
          </span>
        </Link>

        <nav className="hidden items-center gap-7 desktop:flex">
          {navLinks.map(({ label, to }) => (
            <NavLink key={label} to={to} className={navLinkClasses}>
              {label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <Link to="/busca" aria-label="Buscar" className={acaoClasses}>
            <IconBusca />
          </Link>

          {/* Sem AuthContext ainda: "Conta" cai no login. */}
          <Link to="/entrar" aria-label="Conta" className={acaoClasses}>
            <IconConta />
          </Link>

          {/* Não existe rota /favoritos no mapa; por ora aponta para o perfil. */}
          <Link to="/perfil" aria-label="Favoritos" className={acaoClasses}>
            <IconFavoritos />
          </Link>

          <Link
            to="/sacola"
            aria-label={`Sacola, ${itensNaSacola} itens`}
            className={`relative ${acaoClasses}`}
          >
            <IconSacola />
            <span
              aria-hidden="true"
              className="absolute right-1 top-1 flex size-4 items-center justify-center rounded-full bg-coral text-10 font-medium text-bridal"
            >
              {itensNaSacola}
            </span>
          </Link>
        </div>
      </Container>
    </header>
  )
}

export default Header
