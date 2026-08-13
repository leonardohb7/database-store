/**
 * Ícone de sair — item "Sair" da nav do perfil (node 30:5868).
 * Três vetores no export: a porta aberta (3→9 em x, 3→21 em y), a ponta da
 * seta (16→21 / 7→17) e a haste horizontal (9→21 em x, y=12) — recompostos no
 * viewBox nativo de 24, como em IconLocal.jsx.
 */

function IconSair(props) {
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
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <path d="m16 17 5-5-5-5" />
      <path d="M21 12H9" />
    </svg>
  )
}

export default IconSair
