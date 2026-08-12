/**
 * Ícone "Feito à mão" — selo do hero da Home (node 30:3760).
 *
 * O export do Figma vem fatiado em quatro vetores posicionados dentro de uma
 * caixa de 20px; aqui eles foram recompostos no viewBox nativo de 24 (stroke 2),
 * que é o que produz o stroke de 1.667px do design quando renderizado a 20px.
 * A cor virou `currentColor` — no design é Coral Tree, aplicado pelo container.
 */

function IconMao(props) {
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
      <path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2" />
      <path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2" />
      <path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8" />
      <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
    </svg>
  )
}

export default IconMao
