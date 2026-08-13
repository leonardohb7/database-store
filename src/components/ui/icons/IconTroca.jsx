/**
 * Ícone "Troca em 14 dias" — selo da tela de produto (node 30:4694).
 *
 * Recomposto do export fatiado do Figma no viewBox nativo de 24, como em
 * IconCaminhao.jsx: o arco ocupa 12,5%–87,5% nos dois eixos (3→21) e a seta
 * fica na quina superior esquerda, em 3→8.
 */

function IconTroca(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M3 12a9 9 0 1 0 3-6.7L3 8" />
      <path d="M3 3v5h5" />
    </svg>
  )
}

export default IconTroca
