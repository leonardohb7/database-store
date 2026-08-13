/**
 * Ícone "Compartilhar" — botão ao lado de favoritar na tela de produto
 * (node 30:4688). Três nós de 6px de diâmetro (15→21/2→8, 3→9/9→15 e
 * 15→21/16→22) ligados por duas hastes, no viewBox nativo de 24.
 */

function IconCompartilhar(props) {
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
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <path d="M8.59 13.51l6.83 3.98" />
      <path d="M15.41 6.51l-6.82 3.98" />
    </svg>
  )
}

export default IconCompartilhar
