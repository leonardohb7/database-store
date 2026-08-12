/**
 * Button — primitivo de ação.
 *
 * Variantes:
 * - primary    fundo ink, texto creme, hover escurece 8%
 * - secondary  outline 1px, fundo transparente
 * - link       sublinhado, hover coral
 * - cta        botão coral em pílula do design (hero da Home, "Entrar")
 * - ctaSecondary  o par outline do cta, mesma pílula (hero: "Conheça os artesãos")
 *
 * `as="a"` troca o elemento para âncora, mantendo o mesmo visual.
 */

const base =
  'inline-flex items-center justify-center gap-2 font-sans font-medium ' +
  'transition-[background-color,color,border-color,transform] duration-200 ease-out ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral ' +
  'focus-visible:ring-offset-2 focus-visible:ring-offset-cream ' +
  'disabled:pointer-events-none disabled:opacity-40 aria-disabled:pointer-events-none aria-disabled:opacity-40'

const variants = {
  primary:
    'bg-ink text-cream rounded-button hover:bg-ink-hover active:scale-[0.98]',
  secondary:
    'border border-ink-15 bg-transparent text-ink rounded-button hover:border-ink-50 active:scale-[0.98]',
  link: 'text-ink underline underline-offset-4 hover:text-coral px-0',
  cta: 'bg-coral text-bridal rounded-full shadow-cta tracking-button hover:bg-coral-hover active:scale-[0.98]',
  ctaSecondary:
    'border border-ink-15 bg-transparent text-ink rounded-full tracking-button hover:border-ink-50 active:scale-[0.98]',
}

const sizes = {
  sm: 'h-10 px-4 text-14',
  md: 'h-12 px-6 text-14',
}

/** As duas pílulas do design têm altura e padding próprios (52px / 36px). */
const ctaSizes = {
  sm: 'h-12 px-7 text-14',
  md: 'h-13 px-9 text-16',
}

/** A variante link não tem altura nem padding de caixa. */
const linkSizes = {
  sm: 'text-12',
  md: 'text-14',
}

function Button({
  as: Component = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}) {
  const sizeMap =
    variant === 'link'
      ? linkSizes
      : variant === 'cta' || variant === 'ctaSecondary'
        ? ctaSizes
        : sizes

  const classes = [base, variants[variant], sizeMap[size], className]
    .filter(Boolean)
    .join(' ')

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  )
}

export default Button
