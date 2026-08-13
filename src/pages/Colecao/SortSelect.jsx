/**
 * Select de ordenação do header da coleção — node 30:4292.
 *
 * Pílula de 44px com borda ink-15 sobre fundo cream, texto 14px e chevron de
 * 16px encostado a 16px da direita.
 *
 * PURAMENTE VISUAL: o design só traz o rótulo "Curadoria", sem as demais
 * opções da lista, então não há o que ordenar sem inventar. Fica como caixa
 * desenhada até o design definir as opções.
 */

import IconChevronBaixo from '../../components/ui/icons/IconChevronBaixo.jsx'

function SortSelect({ className = '' }) {
  return (
    <div className={['relative shrink-0', className].filter(Boolean).join(' ')}>
      <div className="flex h-11 items-center rounded-full border border-ink-15 bg-cream pl-[21px] pr-[41px] text-14 text-ink">
        Curadoria
      </div>

      <IconChevronBaixo className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-ink" />
    </div>
  )
}

export default SortSelect
