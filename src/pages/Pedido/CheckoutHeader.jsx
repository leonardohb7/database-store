/**
 * Barra enxuta do fluxo de checkout — nodes 30:5330 (/checkout) e
 * 30:5637 (/checkout/confirmacao), idênticas nos dois.
 *
 * Não substitui o Header do site: nos dois nodes ela aparece DENTRO do
 * container, logo abaixo do header sticky, com o wordmark à esquerda e o selo
 * "Conexão segura" à direita.
 *
 * Mora em pages/Pedido/ junto do resto da papelaria do checkout (CheckoutSteps,
 * OrderSummary), que a tela de confirmação também reusa.
 */

import { Link } from 'react-router-dom'
import IconCadeado from '../../components/ui/icons/IconCadeado.jsx'

function CheckoutHeader() {
  return (
    <div className="flex items-center justify-between gap-4">
      <Link
        to="/"
        className="font-display text-24 leading-8 tracking-[-0.24px] text-ink"
      >
        ArteShop
      </Link>

      <span className="flex items-center gap-2 text-12 text-slate">
        <IconCadeado className="shrink-0" />
        Conexão segura
      </span>
    </div>
  )
}

export default CheckoutHeader
