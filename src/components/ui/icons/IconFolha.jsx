/**
 * Ícone "Materiais naturais" — selo do hero da Home (node 30:3768).
 *
 * Recomposto do export fatiado do Figma no viewBox nativo de 24 — ver a nota
 * em IconMao.jsx. O talo (segundo path) é mais curto que o do Lucide atual:
 * a geometria abaixo é a do export, não a da biblioteca.
 */

function IconFolha(props) {
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
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21C2 18 3.85 15.64 7.08 15C9.5 14.52 12 13 13 12" />
    </svg>
  )
}

export default IconFolha
