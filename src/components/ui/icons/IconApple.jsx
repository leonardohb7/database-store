/**
 * Logo da Apple — botão "Continuar com Apple" do login (node 30:4275).
 *
 * O Figma não tem esse ícone como componente: o node é um PNG achatado, o
 * print do botão inteiro coladinho na tela. Aqui vai a marca oficial em vetor,
 * que é o que permite reconstruir o botão de verdade — ver SocialButton.jsx.
 *
 * `fill="currentColor"`: a marca é monocromática, herda a cor do botão.
 */

function IconApple(props) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M17.05 12.54c-.03-2.7 2.2-3.99 2.3-4.06-1.25-1.83-3.2-2.08-3.89-2.11-1.66-.17-3.24.98-4.08.98-.84 0-2.13-.95-3.51-.93-1.81.03-3.48 1.05-4.41 2.67-1.88 3.26-.48 8.09 1.35 10.74.9 1.29 1.97 2.74 3.37 2.69 1.35-.05 1.86-.87 3.5-.87 1.63 0 2.1.87 3.53.84 1.46-.02 2.38-1.32 3.27-2.61 1.03-1.5 1.45-2.95 1.47-3.02-.03-.01-2.83-1.09-2.86-4.32z" />
      <path d="M14.38 4.61c.74-.9 1.24-2.15 1.1-3.4-1.06.05-2.35.71-3.12 1.6-.69.8-1.29 2.07-1.13 3.29 1.19.1 2.4-.6 3.15-1.49z" />
    </svg>
  )
}

export default IconApple
