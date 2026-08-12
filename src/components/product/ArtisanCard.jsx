/**
 * ArtisanCard — card da seção "Artesãos em destaque" (node 30:3909).
 *
 * Imagem quadrada (322×322 no design) com radius 30px sobre fundo ecru, e
 * abaixo cidade/UF em caixa alta, nome em font-display 20px e a linha
 * "ofício · N peças".
 */

import { Link } from 'react-router-dom'

function ArtisanCard({ artisan, className = '' }) {
  return (
    <Link
      to={`/artesao/${artisan.slug}`}
      className={['group flex flex-col gap-5', className]
        .filter(Boolean)
        .join(' ')}
    >
      <div className="overflow-hidden rounded-media bg-ecru">
        <img
          src={artisan.coverImage}
          alt={artisan.name}
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </div>

      <div>
        <p className="text-11 uppercase tracking-label text-slate">
          {artisan.city}, {artisan.state}
        </p>

        <h3 className="pt-1.5 font-display text-20 tracking-heading text-ink">
          {artisan.name}
        </h3>

        <p className="text-14 text-slate">
          {artisan.craft} · {artisan.pieceCount} peças
        </p>
      </div>
    </Link>
  )
}

export default ArtisanCard
