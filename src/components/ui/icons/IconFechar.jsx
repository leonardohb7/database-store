/**
 * Ícone "Limpar" do campo de busca — export SVG do node 30:6070 (Figma).
 *
 * O export vem em dois vetores separados (as duas hastes do X), cada um numa
 * caixa de 10×10 posicionada a 25% dentro do quadro de 20px. Aqui eles viram
 * dois `path` no mesmo viewBox de 20, o que preserva a geometria: de (5,5) a
 * (15,15) com stroke de 1.66667. A cor do export (#5B646F) virou
 * `currentColor` para o ícone herdar o hover do botão, como em IconBusca.
 */

function IconFechar(props) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path d="M15 5L5 15" />
      <path d="M5 5L15 15" />
    </svg>
  )
}

export default IconFechar
