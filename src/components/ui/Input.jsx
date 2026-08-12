/**
 * Input — campo de formulário.
 * Especificação do handoff (node 40:6511): altura 48px, radius 8px,
 * borda 1px #D8D3CD (token `field`), padding 12px 16px.
 * Label acima em 12px caixa alta.
 *
 * `type="password"` ganha o botão de olho para revelar o valor.
 */

import { useId, useState } from 'react'

function EyeIcon({ off }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-5"
      aria-hidden="true"
    >
      {off ? (
        <>
          <path d="M10.7 5.1A9.9 9.9 0 0 1 12 5c5 0 9 4.5 9 7a12 12 0 0 1-2.2 3.2M6.6 6.6A12.4 12.4 0 0 0 3 12c0 2.5 4 7 9 7a9.6 9.6 0 0 0 4.2-.9" />
          <path d="m3 3 18 18" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </>
      ) : (
        <>
          <path d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  )
}

function Input({
  label,
  type = 'text',
  id,
  className = '',
  hint,
  invalid = false,
  ...props
}) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const [revelado, setRevelado] = useState(false)

  const isPassword = type === 'password'
  const tipoFinal = isPassword && revelado ? 'text' : type

  const campo = [
    'h-12 w-full rounded-button border bg-bridal px-4 py-3',
    'font-sans text-14 text-ink placeholder:text-ink-50',
    'transition-colors duration-200 ease-out',
    'focus:outline-none focus:border-coral focus:ring-1 focus:ring-coral',
    'disabled:cursor-not-allowed disabled:bg-ecru disabled:text-ink-50',
    invalid ? 'border-coral' : 'border-field',
    isPassword ? 'pr-12' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={['w-full', className].filter(Boolean).join(' ')}>
      {label && (
        <label
          htmlFor={inputId}
          className="mb-2 block font-sans text-12 uppercase tracking-caps text-slate"
        >
          {label}
        </label>
      )}

      <div className="relative">
        <input id={inputId} type={tipoFinal} className={campo} {...props} />

        {isPassword && (
          <button
            type="button"
            onClick={() => setRevelado((v) => !v)}
            aria-label={revelado ? 'Ocultar senha' : 'Mostrar senha'}
            aria-pressed={revelado}
            className="absolute inset-y-0 right-0 flex w-12 items-center justify-center rounded-r-button text-slate transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            <EyeIcon off={revelado} />
          </button>
        )}
      </div>

      {hint && (
        <p className={`mt-2 text-12 ${invalid ? 'text-coral' : 'text-ink-60'}`}>
          {hint}
        </p>
      )}
    </div>
  )
}

export default Input
