/**
 * Chevron para a direita — separador entre os passos do stepper do checkout
 * (node 30:5341). O vetor ocupa 3×6 dentro da caixa de 12px, o que equivale a
 * `m9 18 6-6-6-6` no viewBox nativo de 24.
 */

function IconChevronDireita(props) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  )
}

export default IconChevronDireita
