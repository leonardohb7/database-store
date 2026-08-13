/**
 * Linha de "Últimos pedidos" — node 30:5892.
 *
 * Número em Playfair 18/28, data e contagem em 12px Shuttle Gray, badge de
 * status ao centro e o total em Inter Medium 16/24, seguido do chevron.
 *
 * NÃO É LINK: no node cada linha aponta para `/order/AS-2891`, rota que não
 * existe neste app — viraria um 404 caindo no catch-all do App.jsx. O chevron
 * fica porque é o que o design desenha; quando houver tela de pedido, é só
 * envolver em <Link>.
 */

import IconChevronDireita from '../../components/ui/icons/IconChevronDireita.jsx'
import { formatBRL } from '../../lib/format.js'

/** Cupid 50% para "Em trânsito" (30:5899) e Locust 40% para "Entregue" (30:5912). */
const CORES_STATUS = {
  'Em trânsito': 'bg-blush-50',
  Entregue: 'bg-sage-40',
}

function OrderRow({ order }) {
  const { id, dateLabel, itemCount, status, total } = order

  return (
    <li className="flex items-center justify-between gap-4 py-5">
      <div className="flex flex-col gap-1">
        <p className="font-display text-18 tracking-title text-ink">
          Pedido {id}
        </p>

        <p className="text-12 text-slate">
          {dateLabel} · {itemCount} {itemCount === 1 ? 'item' : 'itens'}
        </p>
      </div>

      <span
        className={`shrink-0 rounded-full px-3 py-[5.5px] text-12 text-ink ${CORES_STATUS[status]}`}
      >
        {status}
      </span>

      <div className="flex shrink-0 items-center gap-3">
        <span className="text-16 font-medium leading-6 text-ink">
          {formatBRL(total)}
        </span>

        <IconChevronDireita className="shrink-0 text-ink" />
      </div>
    </li>
  )
}

export default OrderRow
