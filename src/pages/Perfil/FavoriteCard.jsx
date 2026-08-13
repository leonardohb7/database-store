/**
 * Card do grid de favoritos do perfil — node 30:5934.
 *
 * NÃO é o ProductCard: aqui o design mostra só a imagem 4:5 em Ecru White com
 * radius 30px, o nome em Inter Medium 14 e o preço em 12px Shuttle Gray. Sem
 * linha de artesão, sem badge, sem botão de favoritar e sem preço riscado — o
 * ProductCard (node 30:3851) tem os quatro, e usá-lo aqui traria elementos que
 * a tela não desenha.
 */

import { Link } from 'react-router-dom'
import { formatBRL } from '../../lib/format.js'

function FavoriteCard({ product }) {
  return (
    <Link to={`/produto/${product.slug}`} className="group block">
      <div className="card-hover overflow-hidden rounded-media bg-ecru">
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="aspect-4/5 w-full object-cover"
        />
      </div>

      <p className="pt-3 text-14 font-medium text-ink">{product.name}</p>

      <p className="text-12 text-slate">{formatBRL(product.price)}</p>
    </Link>
  )
}

export default FavoriteCard
