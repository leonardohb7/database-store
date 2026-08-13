/**
 * Ícone de acervo — linha "24 peças no atelier" do card do artesão
 * (node 30:4950). Quatro vetores no export: a caixa (3→21 / 2→22), a aresta
 * vertical (x=12, 12→22), a diagonal superior (3,3→20,7 em y 7→12) e a aba
 * (7,5→16,5 em y 4,27→9,42) — recompostos no viewBox nativo de 24.
 */

function IconPacote(props) {
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
      <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z" />
      <path d="M12 22V12" />
      <path d="m3.3 7 8.7 5 8.7-5" />
      <path d="m7.5 4.27 9 5.15" />
    </svg>
  )
}

export default IconPacote
