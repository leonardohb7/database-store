/**
 * Modo de envio — nodes 30:5430 (selecionado) e 30:5440.
 *
 * Dois cards de radio. O selecionado ganha borda Coral Tree e fundo Coral Tree
 * 5%; o outro fica só com a borda em Ebony Clay 15%.
 *
 * O radio é o nativo, como no design (a layer se chama `input.accent-primary`
 * e o círculo apagado usa o #767676 padrão do navegador): `accent-coral` pinta
 * o estado marcado com a cor da marca sem redesenhar o controle.
 */

import { MODOS_ENVIO, rotuloFrete } from './envio.js'

function ShippingOptions({ value, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      {MODOS_ENVIO.map((modo) => {
        const selecionado = modo.id === value

        return (
          <label
            key={modo.id}
            className={[
              'flex cursor-pointer items-center gap-4 rounded-[22px] border p-[21px]',
              'transition-colors duration-200 ease-out',
              selecionado ? 'border-coral bg-coral/5' : 'border-ink-15',
            ].join(' ')}
          >
            <input
              type="radio"
              name="envio"
              value={modo.id}
              checked={selecionado}
              onChange={() => onChange(modo.id)}
              className="size-[13px] shrink-0 accent-coral"
            />

            <span className="flex-1">
              <span className="block text-14 font-medium text-ink">
                {modo.nome}
              </span>

              <span className="block text-12 text-slate">{modo.prazo}</span>
            </span>

            <span className="shrink-0 text-14 font-medium text-ink">
              {rotuloFrete(modo.preco)}
            </span>
          </label>
        )
      })}
    </div>
  )
}

export default ShippingOptions
