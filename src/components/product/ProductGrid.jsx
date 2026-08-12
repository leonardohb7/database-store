/**
 * ProductGrid — grade de ProductCard.
 *
 * `columns` controla o número de colunas no desktop (2, 3 ou 4); abaixo de
 * `desktop` são sempre 2, que é o que cabe no card de 4:5.
 *
 * Gutter de 24px nos dois eixos. O node de "Edições recentes" (30:3850) usa
 * 20px na horizontal e 48px na vertical, mas o grid de artesãos (30:3908) usa
 * 24/24 — foi o valor escolhido como padrão do componente.
 */

import ProductCard from './ProductCard.jsx'

const colunas = {
  2: 'grid-cols-2',
  3: 'grid-cols-2 desktop:grid-cols-3',
  4: 'grid-cols-2 desktop:grid-cols-4',
}

function ProductGrid({ products, columns = 4, onFavoritar, className = '' }) {
  const classes = ['grid gap-6', colunas[columns] ?? colunas[4], className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onFavoritar={onFavoritar}
        />
      ))}
    </div>
  )
}

export default ProductGrid
