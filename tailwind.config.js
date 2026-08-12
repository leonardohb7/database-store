/**
 * ArteShop Brasil — Tailwind v4.
 *
 * ATENÇÃO: os design tokens (cores, tipografia, raios, sombras, breakpoints)
 * NÃO ficam aqui. No Tailwind v4 eles são declarados em `@theme`, dentro de
 * `src/index.css`, que é a fonte da verdade. Este arquivo é carregado via a
 * diretiva `@config` no topo daquele CSS e guarda apenas o que continua sendo
 * configuração de build.
 */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  plugins: [],
}
