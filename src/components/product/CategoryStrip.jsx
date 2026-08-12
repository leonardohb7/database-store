/**
 * CategoryStrip — a faixa de categorias da Home (node 30:3793).
 *
 * Seis colunas com gutter de 16px; cada item é uma imagem 3:4 com radius 30px
 * e o nome centralizado 12px abaixo. No mobile/tablet cai para três colunas —
 * o design não tem versão intermediária desta faixa.
 */

import { Link } from 'react-router-dom'

function CategoryStrip({ categories, className = '' }) {
  const classes = ['grid grid-cols-3 gap-4 desktop:grid-cols-6', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={classes}>
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/loja?categoria=${category.slug}`}
          className="group flex flex-col gap-3"
        >
          <div className="overflow-hidden rounded-media bg-ecru">
            <img
              src={category.image}
              alt={category.name}
              loading="lazy"
              className="aspect-3/4 w-full object-cover"
            />
          </div>

          <span className="text-center font-display text-16 leading-6 tracking-body text-ink">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  )
}

export default CategoryStrip
