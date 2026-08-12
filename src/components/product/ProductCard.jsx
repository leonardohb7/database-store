/**
 * ProductCard — card de produto do grid "Edições recentes" (node 30:3851).
 *
 * Caixa da imagem em 4:5 (325×406.25 no design) com radius 30px sobre fundo
 * ecru, sem borda. Badge no canto superior esquerdo, favoritar no superior
 * direito — este só aparece no hover do card.
 *
 * O artesão pode vir pronto via `artisan`; caso contrário é resolvido a partir
 * de `product.artisanId`.
 */

import { Link } from 'react-router-dom'
import { getArtisanById } from '../../data/artisans.js'
import IconFavoritos from '../ui/icons/IconFavoritos.jsx'
import Price from '../ui/Price.jsx'
import Tag from '../ui/Tag.jsx'

function ProductCard({ product, artisan, onFavoritar, className = '' }) {
  const autor = artisan ?? getArtisanById(product.artisanId)

  return (
    <Link
      to={`/produto/${product.slug}`}
      className={['group block', className].filter(Boolean).join(' ')}
    >
      <div className="card-hover relative overflow-hidden rounded-media bg-ecru">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="aspect-4/5 w-full object-cover"
        />

        {product.badge && (
          <Tag
            variant={product.badge}
            appearance="overlay"
            className="absolute left-4 top-4"
          />
        )}

        <button
          type="button"
          aria-label={`Favoritar ${product.name}`}
          onClick={(event) => {
            /* O card inteiro é um link: não navegar ao favoritar. */
            event.preventDefault()
            onFavoritar?.(product)
          }}
          className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-cream-95 text-ink opacity-0 backdrop-blur-[4px] transition-opacity duration-200 ease-out group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
        >
          <IconFavoritos width="16" height="16" />
        </button>
      </div>

      <div className="flex flex-col gap-2 px-1 pt-5">
        {autor && (
          <p className="text-11 uppercase tracking-label text-slate">
            {autor.name} · {autor.city}, {autor.state}
          </p>
        )}

        <h3 className="font-display text-18 tracking-title text-ink">
          {product.name}
        </h3>

        <Price
          value={product.price}
          compareAtValue={product.compareAtPrice}
          size="sm"
        />
      </div>
    </Link>
  )
}

export default ProductCard
