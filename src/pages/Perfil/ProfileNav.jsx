/**
 * Nav lateral do perfil — node 30:5852.
 *
 * Seis pílulas de largura total (px 20 / py 12, gap 12, radius total), com
 * ícone de 16px. A ativa é Ebony Clay com o rótulo em Early Dawn (30:5853) —
 * NÃO ecru: `sidebar/accent` (#F4EEE4) existe no arquivo, mas o fill aplicado
 * é `sidebar/accent-foreground` (#253541).
 *
 * "Sair" é o único com o rótulo em Ebony Clay 60% (30:5870), destacado dos
 * outros cinco. Ele fecha a lista mas não é uma aba: dispara `onSair`.
 */

import IconSair from '../../components/ui/icons/IconSair.jsx'
import { ABAS } from './abas.js'

const pilula =
  'flex w-full items-center gap-3 rounded-full px-5 py-3 text-14 text-left ' +
  'transition-colors duration-200 ease-out focus-visible:outline-none ' +
  'focus-visible:ring-2 focus-visible:ring-coral focus-visible:ring-offset-2 ' +
  'focus-visible:ring-offset-cream'

function ProfileNav({ ativa, onTrocar, onSair }) {
  return (
    <nav className="flex flex-col gap-1">
      {ABAS.map(({ id, label, Icone }) => {
        const selecionada = id === ativa

        return (
          <button
            key={id}
            type="button"
            aria-current={selecionada ? 'page' : undefined}
            onClick={() => onTrocar(id)}
            className={`${pilula} ${
              selecionada
                ? 'bg-ink text-cream'
                : 'text-ink hover:bg-ink-5'
            }`}
          >
            <Icone className="shrink-0" />
            {label}
          </button>
        )
      })}

      <button
        type="button"
        onClick={onSair}
        className={`${pilula} text-ink-60 hover:bg-ink-5`}
      >
        <IconSair className="shrink-0" />
        Sair
      </button>
    </nav>
  )
}

export default ProfileNav
