/**
 * Container — coluna de conteúdo padrão das telas.
 * Envolve a classe `.container-page` (1440px máx + 40px de padding lateral),
 * definida em src/index.css. Header e footer usam o mesmo container, que é o
 * que mantém o wordmark do topo alinhado com o do rodapé.
 */

function Container({ as: Component = 'div', className = '', children }) {
  const classes = ['container-page', className].filter(Boolean).join(' ')

  return <Component className={classes}>{children}</Component>
}

export default Container
