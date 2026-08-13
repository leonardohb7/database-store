/**
 * Sidebar de filtros da coleção — node 30:4298.
 *
 * 310px de largura, quatro grupos separados por filete de 1px em ink-10. O
 * primeiro grupo não tem filete acima. Rótulo do grupo em 12px caixa alta com
 * tracking de 2.4px; cada linha tem 32px (py de 6px sobre conteúdo de 20px).
 *
 * DIVERGÊNCIA DO DESIGN — no Figma o grupo "Categoria" não é checkbox: é uma
 * lista de `button.block` com texto centralizado, seleção única, e o item
 * ativo em coral + Inter Medium. Aqui ele virou checkbox como os outros
 * grupos, a pedido, para permitir seleção múltipla com "Todas" limpando o
 * grupo. Isso também alinha o texto à esquerda, em vez de centralizado.
 *
 * O `aside` é `aside.hidden` no design: só aparece a partir de desktop.
 */

import Checkbox from '../../components/ui/Checkbox.jsx'

function FilterSidebar({ grupos, selecao, onToggle, className = '' }) {
  return (
    <aside
      aria-label="Filtros"
      className={['hidden desktop:block', className].filter(Boolean).join(' ')}
    >
      {grupos.map((grupo, indice) => (
        <div
          key={grupo.key}
          className={[
            'flex flex-col gap-4 pb-6',
            indice > 0 && 'border-t border-ink-10 pt-6',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <h2 className="text-12 uppercase tracking-caps-wide text-ink-60">
            {grupo.label}
          </h2>

          <div className="flex flex-col">
            {grupo.options.map((opcao) => (
              <Checkbox
                key={opcao.id}
                className="w-full py-1.5"
                label={opcao.label}
                /* "Todas" não é um valor guardado: ele representa o grupo
                   categoria vazio, por isso aparece marcado quando não há
                   nenhuma categoria escolhida. */
                checked={
                  grupo.key === 'categoria' && opcao.id === 'todas'
                    ? selecao.categoria.length === 0
                    : selecao[grupo.key].includes(opcao.id)
                }
                onChange={() => onToggle(grupo.key, opcao.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </aside>
  )
}

export default FilterSidebar
