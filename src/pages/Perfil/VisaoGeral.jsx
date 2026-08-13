/**
 * Aba "Visão geral" do perfil — coluna 30:5871.
 *
 * Três blocos empilhados com 32px entre eles: os cards de estatística
 * (30:5872), a seção "Últimos pedidos" (30:5888) e o grid de favoritos
 * (30:5931).
 *
 * SEM TÍTULO NO GRID DE FAVORITOS: o h2 do node (30:5932) está vazio — 32px de
 * altura, nenhum texto. Não inventamos um rótulo; o grid entra direto, como a
 * tela renderiza.
 */

import orders from '../../data/orders.js'
import profile from '../../data/profile.js'
import { getProductBySlug } from '../../data/products.js'
import FavoriteCard from './FavoriteCard.jsx'
import OrderRow from './OrderRow.jsx'

function VisaoGeral() {
  const favoritos = profile.favoriteSlugs.map(getProductBySlug).filter(Boolean)

  return (
    <div className="flex flex-col gap-8">
      <div className="grid gap-4 tablet:grid-cols-3">
        {profile.stats.map(({ label, value }) => (
          <div
            key={label}
            className="flex flex-col gap-2 rounded-media bg-sage-15 p-6"
          >
            <p className="text-12 uppercase tracking-caps-wide text-ink-60">
              {label}
            </p>

            <p className="font-display text-36 leading-10 tracking-[-0.36px] text-ink">
              {value}
            </p>
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-6">
        <h2 className="font-display text-24 tracking-[-0.24px] text-ink">
          Últimos pedidos
        </h2>

        <ul className="divide-y divide-ink-10 border-y border-ink-10">
          {orders.map((order) => (
            <OrderRow key={order.id} order={order} />
          ))}
        </ul>
      </section>

      <section className="grid gap-4 tablet:grid-cols-2 desktop:grid-cols-4">
        {favoritos.map((product) => (
          <FavoriteCard key={product.id} product={product} />
        ))}
      </section>
    </div>
  )
}

export default VisaoGeral
