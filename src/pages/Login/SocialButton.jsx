/**
 * "Continuar com Apple" / "Continuar com Google" — nodes 30:4275 e 30:4276.
 *
 * No Figma os dois são PNGs achatados: prints de botões colados na tela, em
 * tamanhos diferentes (255×45 e 364×48) e com tipografia que não é a do site.
 * Reconstruídos aqui como botões de verdade, na largura da coluna e no Inter
 * do projeto — o que o print define e vale a pena manter é a forma: retângulo
 * de raio 8px (`--radius-button`) sobre superfície clara, e não a pílula que o
 * resto da tela usa.
 *
 * Sem ação: a autenticação da tela é falsa e não há provedor por trás. Ficam
 * desabilitados em vez de darem um clique morto.
 */

function SocialButton({ icon: Icon, className = '', children }) {
  const classes = [
    'flex h-12 w-full items-center justify-center gap-3 rounded-button',
    'border border-ink-10 bg-bridal px-5 font-sans text-14 text-ink shadow-cta',
    'disabled:opacity-60',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <button
      type="button"
      disabled
      title="Login social ainda não disponível"
      className={classes}
    >
      <Icon className="shrink-0" />
      {children}
    </button>
  )
}

export default SocialButton
