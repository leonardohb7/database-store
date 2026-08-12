/**
 * Opções da sidebar "Curadoria" na tela de coleção (node 30:4277).
 * A ordem é a mesma do design.
 *
 * Os valores de `min`/`max` em preço estão em CENTAVOS, para bater com
 * `product.price`. `max: null` significa sem teto.
 */

export const priceRanges = [
  { id: 'ate-200', label: 'Até R$ 200', min: 0, max: 20000 },
  { id: '200-500', label: 'R$ 200 – 500', min: 20000, max: 50000 },
  { id: '500-1000', label: 'R$ 500 – 1.000', min: 50000, max: 100000 },
  { id: 'acima-1000', label: 'Acima de R$ 1.000', min: 100000, max: null },
]

/**
 * O design lista seis materiais — Cerâmica e Madeira aparecem antes dos quatro
 * citados no briefing. Mantidos os seis.
 */
export const materials = [
  { id: 'ceramica', label: 'Cerâmica' },
  { id: 'madeira', label: 'Madeira' },
  { id: 'prata-950', label: 'Prata 950' },
  { id: 'linho', label: 'Linho' },
  { id: 'la-merino', label: 'Lã merino' },
  { id: 'couro-vegetal', label: 'Couro vegetal' },
]

export const regions = [
  { id: 'nordeste', label: 'Nordeste' },
  { id: 'sudeste', label: 'Sudeste' },
  { id: 'sul', label: 'Sul' },
  { id: 'norte', label: 'Norte' },
  { id: 'centro-oeste', label: 'Centro-Oeste' },
]

/** O filtro de categoria começa com "Todas" no design. */
export const categoryFilter = [
  { id: 'todas', label: 'Todas' },
  { id: 'ceramica', label: 'Cerâmica' },
  { id: 'joalheria', label: 'Joalheria' },
  { id: 'texteis', label: 'Têxteis' },
  { id: 'madeira', label: 'Madeira' },
  { id: 'decoracao', label: 'Decoração' },
  { id: 'papelaria', label: 'Papelaria' },
]

const filters = { categoryFilter, priceRanges, materials, regions }

export default filters
