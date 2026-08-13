/**
 * Cadeado — linha "Conexão segura" no topo do checkout (node 30:5334).
 * Dois vetores no export: o corpo (3→21 na horizontal, 11→22 na vertical, com
 * raio 2) e a haste (7→17 / 2→11) — recompostos no viewBox nativo de 24.
 */

function IconCadeado(props) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

export default IconCadeado
