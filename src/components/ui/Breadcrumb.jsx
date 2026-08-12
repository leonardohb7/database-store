/**
 * Breadcrumb — "Início / Loja / Joalheria", 12px, separador "/".
 * O último item é o atual: sem link e em ink.
 *
 * items: [{ label, href? }]
 */

import { Link } from 'react-router-dom'

function Breadcrumb({ items = [], className = '', ...props }) {
  return (
    <nav
      aria-label="Trilha de navegação"
      className={['font-sans text-12', className].filter(Boolean).join(' ')}
      {...props}
    >
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, i) => {
          const ultimo = i === items.length - 1

          return (
            <li key={item.label} className="flex items-center gap-2">
              {ultimo || !item.href ? (
                <span
                  className={ultimo ? 'text-ink' : 'text-slate'}
                  aria-current={ultimo ? 'page' : undefined}
                >
                  {item.label}
                </span>
              ) : (
                <Link
                  to={item.href}
                  className="text-slate transition-colors duration-200 hover:text-coral"
                >
                  {item.label}
                </Link>
              )}

              {!ultimo && (
                <span aria-hidden="true" className="text-ink-50">
                  /
                </span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export default Breadcrumb
