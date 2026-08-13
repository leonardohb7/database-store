/**
 * Cartão de crédito — cabeçalho do bloco de pagamento do checkout
 * (node 30:5454). Dois vetores no export: a caixa (2→22 / 5→19, raio 2) e a
 * tarja horizontal (2→22 em y=10) — no viewBox nativo de 24.
 */

function IconCartao(props) {
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
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <path d="M2 10h20" />
    </svg>
  )
}

export default IconCartao
