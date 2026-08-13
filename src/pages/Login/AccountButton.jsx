/**
 * Par "Entrar" / "Criar conta" do topo do bloco — nodes 30:4176 e 30:4173.
 *
 * Não é o primitivo `ui/Button`: aquele tem cinco variantes fechadas e nenhuma
 * é esta pílula — 44px de altura, padding 20px, gap 12px, texto 14px regular
 * (não medium) e ícone à esquerda. Como só esta tela usa, fica aqui em vez de
 * virar uma sexta variante do primitivo.
 *
 * A cor separa as duas ações: "Entrar" em Ebony Clay, "Criar conta" no teal
 * `color/cyan/34` — ver a nota do token `--color-teal` em src/index.css.
 */

import IconConta from '../../components/ui/icons/IconConta.jsx'

const tons = {
  entrar: 'bg-ink hover:bg-ink-hover',
  criar: 'bg-teal hover:brightness-110',
}

function AccountButton({ tom = 'entrar', children, ...props }) {
  const classes = [
    'flex h-11 w-full items-center gap-3 rounded-full px-5',
    'font-sans text-14 text-cream',
    'transition-[background-color,filter,transform] duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-coral',
    'focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
    'active:scale-[0.98]',
    tons[tom],
  ].join(' ')

  return (
    <button className={classes} {...props}>
      <IconConta width="16" height="16" className="shrink-0" />
      {children}
    </button>
  )
}

export default AccountButton
