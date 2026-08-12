/**
 * Tag — selos dos cards de produto.
 * Rótulos e ordem conforme a seção "Tags" do handoff (node 40:6511).
 * Aceita `variant` ou, por conveniência, o valor de `product.badge`.
 *
 * Duas aparências:
 * - `solid` (padrão)  cores sólidas por variante, do handoff;
 * - `overlay`         a pílula translúcida que os cards de produto usam por
 *                     cima da imagem (node 30:3854) — cream 95% com blur de
 *                     4px e texto ink, igual para todas as variantes.
 */

const base = 'inline-flex items-center font-sans text-10 uppercase'

const appearances = {
  solid: 'rounded-button px-2 py-1 tracking-caps-wide leading-none',
  overlay:
    'rounded-full px-3 py-1.5 tracking-caps bg-cream-95 backdrop-blur-[4px] text-ink',
}

const variants = {
  'edicao-limitada': { className: 'bg-ink text-cream', label: 'Edição limitada' },
  novo: { className: 'bg-bridal text-ink border border-border', label: 'Novo' },
  'best-seller': { className: 'bg-blush-40 text-coral', label: 'Bestseller' },
  'sob-encomenda': {
    className: 'border border-ink-15 bg-transparent text-ink',
    label: 'Sob encomenda',
  },
}

function Tag({ variant, appearance = 'solid', children, className = '', ...props }) {
  const preset = variants[variant]
  if (!preset) return null

  /* No overlay a cor não varia por variante — só o rótulo. */
  const classes = [
    base,
    appearances[appearance],
    appearance === 'solid' ? preset.className : null,
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <span className={classes} {...props}>
      {children ?? preset.label}
    </span>
  )
}

export default Tag
