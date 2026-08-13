/**
 * Modos de envio do checkout — nodes 30:5430 e 30:5440.
 *
 * Nomes, prazos e preços são os do design. Mora em módulo próprio porque tanto
 * o seletor (ShippingOptions) quanto o resumo (OrderSummary) precisam deles.
 *
 * Preços em CENTAVOS — ver src/lib/format.js.
 */

import { formatBRL } from '../../lib/format.js'

export const MODOS_ENVIO = [
  { id: 'padrao', nome: 'Padrão', prazo: '5–8 dias úteis', preco: 0 },
  { id: 'expresso', nome: 'Expresso', prazo: '2–3 dias úteis', preco: 4900 },
]

/** O design escreve "Grátis" no lugar de "R$ 0". */
export function rotuloFrete(preco) {
  return preco === 0 ? 'Grátis' : formatBRL(preco)
}
