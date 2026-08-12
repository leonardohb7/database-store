/**
 * Checkbox — 20×20px, radius 4px, borda 1px #D8D3CD (token `field`).
 * Marcado: fundo ink com check branco. Especificação do handoff (40:6511).
 *
 * O input nativo fica em `sr-only` e serve de `peer`: a caixa desenhada e o
 * texto reagem a ele por CSS, então teclado, foco e leitor de tela continuam
 * funcionando sem JS.
 */

import { useId } from 'react'

function Checkbox({ label, id, className = '', ...props }) {
  const generatedId = useId()
  const inputId = id ?? generatedId

  return (
    <label
      htmlFor={inputId}
      className={['inline-flex items-center gap-3', className]
        .filter(Boolean)
        .join(' ')}
    >
      <input id={inputId} type="checkbox" className="peer sr-only" {...props} />

      <span
        aria-hidden="true"
        /* O estado disabled só esmaece (opacity). Trocar o `bg` aqui
           sobrescreveria o `peer-checked:bg-ink` e o marcado+disabled ficaria
           com a caixa vazia. */
        className="flex size-5 shrink-0 cursor-pointer items-center justify-center rounded border border-field bg-bridal transition-colors duration-200 ease-out peer-hover:border-ink-50 peer-checked:border-ink peer-checked:bg-ink peer-checked:[&_svg]:opacity-100 peer-focus-visible:ring-2 peer-focus-visible:ring-coral peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-cream peer-disabled:cursor-not-allowed peer-disabled:opacity-40"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="size-3 text-white opacity-0 transition-opacity duration-200"
        >
          <path d="m5 12 5 5L19 7" />
        </svg>
      </span>

      {label && (
        <span className="cursor-pointer font-sans text-14 text-ink peer-disabled:cursor-not-allowed peer-disabled:text-ink-50">
          {label}
        </span>
      )}
    </label>
  )
}

export default Checkbox
