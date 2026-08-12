/**
 * SectionHeading — o cabeçalho que se repete em quase toda seção do design:
 * eyebrow em caixa alta ("CURADORIA"), título em font-display 48px e, à
 * direita, o link "Ver tudo →" opcional.
 *
 * Ex. na Home: "Curadoria / Edições recentes / Ver tudo".
 */

import { Link } from 'react-router-dom'

function SectionHeading({
  eyebrow,
  title,
  linkLabel = 'Ver tudo',
  linkHref,
  className = '',
  ...props
}) {
  return (
    <div
      className={['flex flex-wrap items-end justify-between gap-4', className]
        .filter(Boolean)
        .join(' ')}
      {...props}
    >
      <div>
        {eyebrow && (
          <p className="font-sans text-12 uppercase tracking-eyebrow text-slate">
            {eyebrow}
          </p>
        )}
        <h2 className="mt-5 font-display text-48 text-ink">{title}</h2>
      </div>

      {linkHref && (
        <Link
          to={linkHref}
          className="group inline-flex items-center gap-2 font-sans text-14 text-ink underline underline-offset-4 transition-colors duration-200 hover:text-coral"
        >
          {linkLabel}
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      )}
    </div>
  )
}

export default SectionHeading
