/**
 * Pedidos listados em "Últimos pedidos" na tela de perfil (node 30:5842).
 * Números, datas, quantidade de itens, status e totais são os do design —
 * inclusive o status de AS-2612 ("Entregue"), que não constava no briefing.
 *
 * Totais em CENTAVOS. Sem `items[]` de propósito: nenhum dos totais fecha com
 * qualquer combinação dos preços das 12 peças do catálogo (AS-2891 = R$ 1.217,
 * por exemplo, não é soma de três peças existentes). Inventar linhas criaria
 * uma inconsistência entre a soma e o total mostrado no design.
 */

const orders = [
  {
    id: 'AS-2891',
    date: '2026-05-08',
    dateLabel: '08 mai 2026',
    itemCount: 3,
    status: 'Em trânsito',
    total: 121700,
  },
  {
    id: 'AS-2754',
    date: '2026-04-12',
    dateLabel: '12 abr 2026',
    itemCount: 1,
    status: 'Entregue',
    total: 54000,
  },
  {
    id: 'AS-2612',
    date: '2026-03-23',
    dateLabel: '23 mar 2026',
    itemCount: 2,
    status: 'Entregue',
    total: 86900,
  },
]

export default orders
