/**
 * Ícone "Buscar" do header — export SVG do node 30:4104 (Figma).
 * Geometria e stroke-width vêm do export; a cor virou `currentColor` para o
 * ícone herdar o hover do botão que o contém.
 */

function IconBusca(props) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15.75 15.75L12.495 12.495" />
      <path d="M8.25 14.25C11.5637 14.25 14.25 11.5637 14.25 8.25C14.25 4.93629 11.5637 2.25 8.25 2.25C4.93629 2.25 2.25 4.93629 2.25 8.25C2.25 11.5637 4.93629 14.25 8.25 14.25Z" />
    </svg>
  )
}

export default IconBusca
