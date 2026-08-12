/**
 * Rating — cinco estrelas de 16px na cor #C66F4A (token `star`).
 * Handoff 40:6511: "Cor estrelas: #C66F4A · Tamanho: 16px".
 *
 * Aceita valor fracionário: a camada preenchida é recortada por largura,
 * então 4.3 mostra a quinta estrela 30% cheia.
 *
 * A estrela é SVG inline de propósito — os assets exportados do Figma expiram
 * em ~7 dias e não servem para código versionado.
 */

function Star({ className = '' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`size-4 shrink-0 ${className}`}
      aria-hidden="true"
    >
      <path d="M12 2.5l2.95 5.98 6.6.96-4.775 4.654 1.127 6.573L12 17.567l-5.902 3.1 1.127-6.573L2.45 9.44l6.6-.96L12 2.5z" />
    </svg>
  )
}

function Rating({ value = 0, count, className = '', ...props }) {
  const limitado = Math.max(0, Math.min(5, value))
  const percentual = (limitado / 5) * 100

  return (
    <div
      className={['flex items-center gap-2', className].filter(Boolean).join(' ')}
      role="img"
      aria-label={`${limitado} de 5${count != null ? ` · ${count} avaliações` : ''}`}
      {...props}
    >
      <span className="relative inline-flex">
        {/* Trilha vazia */}
        <span className="flex gap-0.5 text-ink-15">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} />
          ))}
        </span>

        {/* Camada preenchida, recortada pela largura */}
        <span
          className="absolute inset-y-0 left-0 overflow-hidden"
          style={{ width: `${percentual}%` }}
        >
          <span className="flex gap-0.5 text-star">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} />
            ))}
          </span>
        </span>
      </span>

      {count != null && (
        <span className="font-sans text-12 text-slate">
          {limitado} · {count} avaliações
        </span>
      )}
    </div>
  )
}

export default Rating
