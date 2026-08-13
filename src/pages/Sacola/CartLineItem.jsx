/**
 * Linha da sacola — node 30:5139.
 *
 * Miniatura de 128px em ecru com radius 30px à esquerda; à direita, artesão e
 * nome no topo e, colados na base, o stepper e o preço da linha.
 *
 * O preço mostrado é o da LINHA (preço unitário × quantidade): o node traz
 * "R$ 778" para 2 unidades do Vaso Areia Bruta, que custa R$ 389.
 */

import { Link } from 'react-router-dom'
import QuantityStepper from '../../components/ui/QuantityStepper.jsx'
import IconFechar from '../../components/ui/icons/IconFechar.jsx'
import { getArtisanById } from '../../data/artisans.js'
import { formatBRL } from '../../lib/format.js'

function CartLineItem({ item, onUpdateQuantity, onRemove }) {
  const { product, quantity } = item
  const artesao = getArtisanById(product.artisanId)

  return (
    <li className="flex gap-5 py-6">
      <Link
        to={`/produto/${product.slug}`}
        className="size-32 shrink-0 overflow-hidden rounded-media bg-ecru"
      >
        <img
          src={product.images[0]}
          alt={product.name}
          loading="lazy"
          className="size-full object-cover"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between">
        <div className="flex items-start justify-between gap-4">
          <div>
            {artesao && (
              /* 2,2px é o tracking deste node; o ProductCard usa 1,98px
                 (tracking-label) porque o card do grid tem outro valor. */
              <p className="text-11 uppercase tracking-[2.2px] text-slate">
                {artesao.name}
              </p>
            )}

            <Link
              to={`/produto/${product.slug}`}
              className="block font-display text-18 leading-7 tracking-title text-ink transition-colors duration-200 hover:text-coral"
            >
              {product.name}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => onRemove(product.id)}
            aria-label={`Remover ${product.name} da sacola`}
            className="shrink-0 px-1 py-3.5 text-slate transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:text-ink"
          >
            <IconFechar width="16" height="16" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-4 pt-4">
          <QuantityStepper
            size="sm"
            value={quantity}
            label={`quantidade de ${product.name}`}
            onChange={(valor) => onUpdateQuantity(product.id, valor)}
          />

          <span className="font-sans text-16 font-medium leading-6 text-ink">
            {formatBRL(product.price * quantity)}
          </span>
        </div>
      </div>
    </li>
  )
}

export default CartLineItem
