/**
 * Aside "Resumo" — node 30:5197.
 *
 * Bloco em Locust 20% com radius de 30px (o nome da layer diz "rounded-2xl",
 * mas o raio aplicado no node é 30px — o mesmo dos cards), 32px de padding e
 * 16px entre os blocos.
 *
 * FRETE: grátis a partir de R$ 600, regra que aparece no texto da Home
 * (src/pages/Home/Hero.jsx). Abaixo do limiar o design não diz o valor, então
 * a linha mostra "Calculado no checkout" — mesma saída da tela de produto
 * (30:4677) — em vez de um preço inventado. Por isso o total é o subtotal.
 *
 * CUPOM: o campo e o "Aplicar" existem no design, mas não há dado de cupom no
 * mock; o botão fica desabilitado enquanto o campo está vazio e, por ora, o
 * envio não aplica desconto nenhum.
 */

import { useState } from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/ui/Button.jsx'
import { formatBRL } from '../../lib/format.js'

/** Em centavos — ver src/lib/format.js. */
export const FRETE_GRATIS_A_PARTIR_DE = 60000

function LinhaResumo({ label, children }) {
  return (
    <div className="flex items-baseline justify-between gap-4 text-14">
      <span className="text-ink-70">{label}</span>
      <span className="text-right text-ink">{children}</span>
    </div>
  )
}

function CartSummary({ subtotal }) {
  const [cupom, setCupom] = useState('')

  const freteGratis = subtotal >= FRETE_GRATIS_A_PARTIR_DE

  return (
    /* O design cola o aside em `top-0`; o Header do projeto é sticky e ocupa
       81px, daí o offset — mesmo ajuste da coluna de compra da PDP. */
    <div className="flex flex-col gap-4 rounded-media bg-sage-20 p-8 desktop:sticky desktop:top-[81px]">
      <h2 className="font-display text-24 tracking-[-0.24px] text-ink">
        Resumo
      </h2>

      <div className="flex flex-col gap-3 pt-2">
        <LinhaResumo label="Subtotal">{formatBRL(subtotal)}</LinhaResumo>

        <LinhaResumo label="Frete">
          {freteGratis ? 'Grátis' : 'Calculado no checkout'}
        </LinhaResumo>

        <LinhaResumo label="Estimativa de entrega">5–8 dias</LinhaResumo>
      </div>

      <div className="flex items-baseline justify-between gap-4 border-t border-ink-15 pt-4">
        <span className="font-display text-18 tracking-title text-ink">
          Total
        </span>

        <span className="font-display text-24 tracking-[-0.24px] text-ink">
          {formatBRL(subtotal)}
        </span>
      </div>

      <form
        onSubmit={(event) => event.preventDefault()}
        className="flex gap-2 pb-2 pt-1"
      >
        <input
          type="text"
          value={cupom}
          onChange={(event) => setCupom(event.target.value)}
          placeholder="Cupom de desconto"
          aria-label="Cupom de desconto"
          className="h-11 min-w-0 flex-1 rounded-full border border-ink-15 bg-cream px-[17px] font-sans text-14 text-ink placeholder:text-ink-50 focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral"
        />

        <Button
          type="submit"
          variant="ctaSecondary"
          size="sm"
          disabled={!cupom.trim()}
          className="h-11 shrink-0 px-[21px]"
        >
          Aplicar
        </Button>
      </form>

      <Button as={Link} to="/checkout" variant="cta" size="md" className="w-full">
        Finalizar compra
      </Button>

      <p className="text-center text-12 text-slate">
        Pagamento seguro · Compra protegida
      </p>
    </div>
  )
}

export default CartSummary
