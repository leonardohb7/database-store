/**
 * Helpers de formatação.
 *
 * Convenção de dinheiro no projeto: todo valor monetário é guardado em
 * CENTAVOS, como inteiro (R$ 389 → 38900). Isso evita erro de ponto flutuante
 * em soma de carrinho. A conversão para texto acontece só na renderização.
 */

/**
 * Formata centavos no padrão brasileiro.
 * Omite os centavos quando o valor é redondo, como no design: "R$ 1.280".
 * Quando há centavos, mostra os dois dígitos: "R$ 1.280,50".
 *
 * @param {number} centavos valor em centavos
 * @returns {string}
 */
export function formatBRL(centavos) {
  const temCentavos = centavos % 100 !== 0

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: temCentavos ? 2 : 0,
    maximumFractionDigits: temCentavos ? 2 : 0,
  }).format(centavos / 100)
}

const MESES = [
  'jan', 'fev', 'mar', 'abr', 'mai', 'jun',
  'jul', 'ago', 'set', 'out', 'nov', 'dez',
]

/**
 * Data no formato da confirmação de pedido (node 30:5678): "08. mai 2026".
 * O `Intl` de pt-BR devolve "08 de mai. de 2026", com os "de" e o ponto no
 * lugar errado, então a montagem é manual. A tela renderiza em caixa alta por
 * CSS (`uppercase`) — aqui o texto sai como no design, em minúsculas.
 *
 * @param {Date|string|number} data
 * @returns {string}
 */
export function formatDataPedido(data) {
  const d = data instanceof Date ? data : new Date(data)
  const dia = String(d.getDate()).padStart(2, '0')

  return `${dia}. ${MESES[d.getMonth()]} ${d.getFullYear()}`
}

/**
 * Percentual de desconto entre o preço cheio e o preço atual.
 * Retorna null quando não há comparação válida.
 *
 * @param {number} price centavos
 * @param {number|null|undefined} compareAtPrice centavos
 * @returns {number|null}
 */
export function descontoPercentual(price, compareAtPrice) {
  if (!compareAtPrice || compareAtPrice <= price) return null
  return Math.round((1 - price / compareAtPrice) * 100)
}
