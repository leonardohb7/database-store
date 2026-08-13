/**
 * Paginação do grid de coleção — node 30:4518.
 *
 * Botões de 40px em pílula, gutter de 8px, centralizados. O ativo tem fundo
 * ink e texto creme; os demais só texto ink. As reticências são um span de
 * 16px em slate, sem caixa.
 *
 * PURAMENTE VISUAL: o design mostra 1–5 … 12, mas as 12 peças do mock cabem
 * numa página só. Os botões não navegam — não há segunda página para ir.
 */

const paginas = [1, 2, 3, 4, 5, '…', 12]

function Pagination({ paginaAtual = 1, className = '' }) {
  return (
    <nav
      aria-label="Paginação"
      className={['flex items-center justify-center gap-2', className]
        .filter(Boolean)
        .join(' ')}
    >
      {paginas.map((pagina, indice) =>
        pagina === '…' ? (
          <span
            key={`reticencias-${indice}`}
            aria-hidden="true"
            className="px-2 text-16 leading-6 text-slate"
          >
            {pagina}
          </span>
        ) : (
          <button
            key={pagina}
            type="button"
            aria-current={pagina === paginaAtual ? 'page' : undefined}
            className={[
              'flex size-10 items-center justify-center rounded-full text-14',
              'transition-colors duration-200 ease-out',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
              pagina === paginaAtual
                ? 'bg-ink text-cream'
                : 'text-ink hover:bg-ink-5',
            ].join(' ')}
          >
            {pagina}
          </button>
        ),
      )}
    </nav>
  )
}

export default Pagination
