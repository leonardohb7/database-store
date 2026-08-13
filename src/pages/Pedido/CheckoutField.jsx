/**
 * Campo do checkout — node 30:5361 e os doze irmãos dele.
 *
 * NÃO usa o primitivo `ui/Input` de propósito: aquele foi construído a partir
 * do frame Handoff 40:6511, que o CLAUDE.md marca como desatualizado (radius
 * 8px, fundo Bridal Heath, borda #D8D3CD). Os campos das telas reais são outra
 * coisa — radius 22px, fundo Early Dawn e borda Ebony Clay 15% — e é isso que
 * este node renderiza, igual ao cupom da Sacola e ao campo do rodapé.
 *
 * Rótulo: 12px em caixa alta, tracking 1,8px, Ebony Clay 60%.
 * Estado inválido: borda coral (arteShop/Coral Tree) e a mensagem logo abaixo.
 * O design não desenha esse estado — ver src/pages/Pedido/checkoutForm.js.
 */

import { useId } from 'react'

function CheckoutField({ label, id, error, className = '', ...props }) {
  const generatedId = useId()
  const campoId = id ?? generatedId
  const erroId = `${campoId}-erro`

  const campo = [
    'h-12 w-full rounded-[22px] border bg-cream px-[17px]',
    'font-sans text-14 text-ink placeholder:text-ink-50',
    'transition-colors duration-200 ease-out',
    'focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral',
    error ? 'border-coral' : 'border-ink-15',
  ].join(' ')

  return (
    <label
      htmlFor={campoId}
      className={['flex flex-col gap-2', className].filter(Boolean).join(' ')}
    >
      <span className="text-12 uppercase tracking-[1.8px] text-ink-60">
        {label}
      </span>

      <input
        id={campoId}
        className={campo}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? erroId : undefined}
        {...props}
      />

      {error && (
        <span id={erroId} className="text-12 text-coral">
          {error}
        </span>
      )}
    </label>
  )
}

export default CheckoutField
