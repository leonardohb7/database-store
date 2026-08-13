/**
 * Chevron para baixo — 16px, usado no select "Curadoria" da coleção
 * (node 30:4296). Geometria do export: o vetor ocupa 8×4 dentro da caixa de
 * 16px, o que equivale a `m6 9 6 6 6-6` no viewBox nativo de 24.
 */

function IconChevronBaixo(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

export default IconChevronBaixo
