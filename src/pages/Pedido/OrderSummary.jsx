/**
 * Aside do resumo — nodes 30:5489 ("Seu pedido", /checkout) e 30:5693
 * ("Resumo do pedido", /checkout/confirmacao).
 *
 * Bloco em Locust 20% com radius de 30px (a layer se chama "rounded-2xl", mas
 * o raio aplicado é 30px — o mesmo dos cards), 32px de padding e 20px entre os
 * blocos. Miniatura de 64px em Ecru White com radius 22px.
 *
 * Os dois nodes são o mesmo bloco: só mudam o título e a linha "Prazo de
 * envio", que existe apenas na confirmação — daí as duas props opcionais.
 *
 * PREÇO DA LINHA: o design mostra três peças com quantidade 1, então "R$ 389"
 * é ao mesmo tempo o preço unitário e o da linha. Aqui vale o da LINHA
 * (unitário × quantidade), que é o único que fecha com o subtotal — mesma
 * decisão do CartLineItem. O node não tem nenhum elemento para a quantidade.
 */

import { getArtisanById } from '../../data/artisans.js'
import { formatBRL } from '../../lib/format.js'
import { rotuloFrete } from './envio.js'

function LinhaTotal({ label, children }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-14">
      <span className="text-ink-70">{label}</span>
      <span className="text-ink">{children}</span>
    </div>
  )
}

function OrderSummary({ items, subtotal, frete, titulo = 'Seu pedido', prazo }) {
  return (
    /* O design cola o aside em `top-0`; o Header do projeto é sticky e ocupa
       81px, daí o offset — mesmo ajuste do resumo da Sacola. */
    <div className="flex flex-col gap-5 rounded-media bg-sage-20 p-8 desktop:sticky desktop:top-[81px]">
      <h2 className="font-display text-24 tracking-[-0.24px] text-ink">
        {titulo}
      </h2>

      <ul className="divide-y divide-ink-10 pt-1">
        {items.map(({ product, quantity }) => {
          const artesao = getArtisanById(product.artisanId)

          return (
            <li key={product.id} className="flex items-center gap-4 py-4">
              <div className="size-16 shrink-0 overflow-hidden rounded-[22px] bg-ecru">
                <img
                  src={product.images[0]}
                  alt={product.name}
                  loading="lazy"
                  className="size-full object-cover"
                />
              </div>

              <div className="min-w-0 flex-1">
                <p className="truncate text-14 font-medium text-ink">
                  {product.name}
                </p>

                {artesao && (
                  <p className="text-12 text-slate">{artesao.name}</p>
                )}
              </div>

              <span className="shrink-0 text-14 text-ink">
                {formatBRL(product.price * quantity)}
              </span>
            </li>
          )
        })}
      </ul>

      <div className="flex flex-col gap-2 border-t border-ink-15 pt-[21px]">
        <LinhaTotal label="Subtotal">{formatBRL(subtotal)}</LinhaTotal>

        <LinhaTotal label="Frete">{rotuloFrete(frete)}</LinhaTotal>

        {prazo && <LinhaTotal label="Prazo de envio">{prazo}</LinhaTotal>}

        <div className="flex items-baseline justify-between gap-4 border-t border-ink-10 pt-3">
          <span className="font-display text-18 tracking-title text-ink">
            Total
          </span>

          <span className="font-display text-24 tracking-[-0.24px] text-ink">
            {formatBRL(subtotal + frete)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default OrderSummary
