/**
 * Ícone "Olho" — revelar/ocultar senha.
 *
 * NÃO vem do Figma: nenhuma tela do arquivo desenha o botão de revelar senha.
 * Foi desenhado à mão no traço dos ícones exportados (stroke 1.5, ponta e junta
 * redondas, `currentColor`) para casar com os irmãos desta pasta.
 *
 * `off` troca o olho aberto pelo olho cortado — o estado "senha visível".
 */

function IconOlho({ off = false, ...props }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {off ? (
        <>
          <path d="M10.7 5.1A9.9 9.9 0 0 1 12 5c5 0 9 4.5 9 7a12 12 0 0 1-2.2 3.2M6.6 6.6A12.4 12.4 0 0 0 3 12c0 2.5 4 7 9 7a9.6 9.6 0 0 0 4.2-.9" />
          <path d="m3 3 18 18" />
          <path d="M9.9 9.9a3 3 0 0 0 4.2 4.2" />
        </>
      ) : (
        <>
          <path d="M3 12s3.6-7 9-7 9 7 9 7-3.6 7-9 7-9-7-9-7Z" />
          <circle cx="12" cy="12" r="3" />
        </>
      )}
    </svg>
  )
}

export default IconOlho
