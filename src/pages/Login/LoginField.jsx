/**
 * Campo do login — nodes 30:4169/30:4166 (Email) e 30:4170/30:4171 (Senha).
 *
 * NÃO usa o primitivo `ui/Input`, pelo mesmo motivo do CheckoutField: aquele
 * saiu do frame Handoff 40:6511, que o CLAUDE.md marca como desatualizado.
 * Também não é o CheckoutField: os campos desta tela são maiores e mais soltos
 * — pílula de 52px com raio total e padding de 37px, contra os 48px/raio 22px/
 * padding 17px do checkout.
 *
 * Rótulo: "Email:"/"Senha:" em 16px/26px Cod Gray, com os dois-pontos que o
 * design escreve. Valor: 16px Inter Medium, tracking 0,4px, Ebony Clay.
 * Estado inválido: borda coral e a mensagem abaixo — o design não desenha esse
 * estado, ver src/pages/Login/loginForm.js.
 *
 * `type="password"` ganha o botão de revelar. Ele também não está no design; é
 * pedido da tela e mora dentro da pílula, à direita, sem alterar a altura.
 */

import { useId, useState } from 'react'
import IconOlho from '../../components/ui/icons/IconOlho.jsx'

function LoginField({ label, type = 'text', id, error, className = '', ...props }) {
  const generatedId = useId()
  const campoId = id ?? generatedId
  const erroId = `${campoId}-erro`

  const [revelado, setRevelado] = useState(false)

  const isSenha = type === 'password'
  const tipoFinal = isSenha && revelado ? 'text' : type

  const campo = [
    'h-13 w-full rounded-full border bg-transparent px-[37px]',
    'font-sans text-16 font-medium tracking-button text-ink',
    'placeholder:font-normal placeholder:tracking-normal placeholder:text-ink-50',
    'transition-colors duration-200 ease-out',
    'focus:border-coral focus:outline-none focus:ring-1 focus:ring-coral',
    error ? 'border-coral' : 'border-ink-15',
    /* Abre espaço pro olho: 37px de padding + 20px de ícone + 12px de folga. */
    isSenha ? 'pr-[69px]' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div className={['flex flex-col gap-4', className].filter(Boolean).join(' ')}>
      <label htmlFor={campoId} className="text-16 text-cod">
        {label}
      </label>

      <div className="relative">
        <input
          id={campoId}
          type={tipoFinal}
          className={campo}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? erroId : undefined}
          {...props}
        />

        {isSenha && (
          <button
            type="button"
            onClick={() => setRevelado((v) => !v)}
            aria-label={revelado ? 'Ocultar senha' : 'Mostrar senha'}
            aria-pressed={revelado}
            className="absolute inset-y-0 right-0 flex w-[57px] items-center justify-center rounded-r-full text-slate transition-colors duration-200 hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral"
          >
            <IconOlho off={revelado} />
          </button>
        )}
      </div>

      {error && (
        <span id={erroId} className="text-12 text-coral">
          {error}
        </span>
      )}
    </div>
  )
}

export default LoginField
