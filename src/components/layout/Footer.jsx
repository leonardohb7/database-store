/**
 * Footer — node 30:4017 ("footer.mt-32") do Figma.
 *
 * Grid de 12 colunas com gutter de 48px: marca + newsletter em 1–5, e três
 * colunas de links em 6–7, 8–9 e 10–11. Barra inferior separada por 1px.
 *
 * Nota: no design a coluna "Comprar" tem 5 itens; "Madeira" foi acrescentado
 * a pedido, para a coluna bater com as categorias do nav do header.
 *
 * O grid de 12 só vale a partir de `desktop`; abaixo disso as colunas
 * empilham. O Figma não tem versão desktop-intermediária deste rodapé.
 */

import { Link } from 'react-router-dom'
import Button from '../ui/Button.jsx'
import Container from './Container.jsx'
import IconFacebook from '../ui/icons/IconFacebook.jsx'
import IconInstagram from '../ui/icons/IconInstagram.jsx'

const colunas = [
  {
    title: 'Comprar',
    placement: 'desktop:col-start-6 desktop:col-span-2',
    links: [
      { label: 'Novidades', to: '/loja' },
      { label: 'Best sellers', to: '/loja' },
      { label: 'Cerâmica', to: '/loja?categoria=ceramica' },
      { label: 'Joalheria', to: '/loja?categoria=joalheria' },
      { label: 'Têxteis', to: '/loja?categoria=texteis' },
      { label: 'Madeira', to: '/loja?categoria=madeira' },
    ],
  },
  {
    title: 'ArteShop',
    placement: 'desktop:col-start-8 desktop:col-span-2',
    links: [
      { label: 'Nossa história', to: '/' },
      { label: 'Artesãos', to: '/artesaos' },
      { label: 'Diário editorial', to: '/' },
      { label: 'Sustentabilidade', to: '/' },
    ],
  },
  {
    title: 'Suporte',
    placement: 'desktop:col-start-10 desktop:col-span-2',
    links: [
      { label: 'Atendimento', to: '/' },
      { label: 'Entregas', to: '/' },
      { label: 'Trocas', to: '/' },
      { label: 'Cuidados', to: '/' },
    ],
  },
]

const linkClasses =
  'text-14 text-ink-80 underline-offset-4 transition-colors duration-200 ' +
  'hover:text-mocha hover:underline ' +
  'focus-visible:outline-none focus-visible:text-mocha focus-visible:underline'

const socialClasses =
  'text-slate transition-colors duration-200 hover:text-mocha ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral rounded-full'

function Footer() {
  return (
    <footer className="mt-32 border-t border-ink-10 bg-linen">
      <Container className="flex flex-col gap-16 py-20">
        <div className="grid grid-cols-1 gap-12 desktop:grid-cols-12">
          <div className="flex flex-col gap-5 desktop:col-span-5">
            <p className="font-display text-30 text-ink">ArteShop</p>

            <p className="max-w-96 text-14 leading-relaxed text-slate">
              Curadoria de objetos feitos à mão por artesãos brasileiros
              independentes. Cada peça carrega a história de quem a fez.
            </p>

            <form
              className="flex max-w-96 gap-2"
              onSubmit={(event) => event.preventDefault()}
            >
              <label htmlFor="footer-newsletter" className="sr-only">
                Seu e-mail
              </label>
              <input
                id="footer-newsletter"
                type="email"
                placeholder="seu@email.com"
                className="h-11 flex-1 rounded-full border border-ink-15 bg-cream px-5 text-14 text-ink placeholder:text-ink-50 transition-colors duration-200 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
              />
              <Button
                type="submit"
                size="sm"
                className="h-11 rounded-full px-5 font-normal"
              >
                Inscrever
              </Button>
            </form>
          </div>

          {colunas.map(({ title, placement, links }) => (
            <div key={title} className={`flex flex-col gap-5 ${placement}`}>
              <h2 className="font-sans text-12 uppercase tracking-caps-wide text-ink-60">
                {title}
              </h2>
              <ul className="flex flex-col gap-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link to={to} className={linkClasses}>
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-ink-10 pt-8 tablet:flex-row tablet:items-center tablet:justify-between">
          <p className="text-12 text-slate">
            © 2026 ArteShop. Curado com cuidado em São Paulo, Brasil.
          </p>

          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className={socialClasses}
            >
              <IconInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className={socialClasses}
            >
              <IconFacebook />
            </a>
            <Link to="/" className="text-12 text-slate hover:text-mocha">
              Política de privacidade
            </Link>
            <Link to="/" className="text-12 text-slate hover:text-mocha">
              Termos
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
