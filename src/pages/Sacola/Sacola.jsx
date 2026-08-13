/**
 * Tela Sacola (/sacola) — node 30:5128.
 *
 * Grid de 12 colunas com gutter de 40px: a lista ocupa 8 colunas e o resumo,
 * 4. A lista tem borda em cima e embaixo, com divisória entre os itens
 * (`div.divide-y` no node).
 *
 * O estado vem todo do CartContext — esta tela não guarda nada além do cupom,
 * que vive dentro do CartSummary.
 */

import { Link } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'
import Breadcrumb from '../../components/ui/Breadcrumb.jsx'
import Button from '../../components/ui/Button.jsx'
import { useCart } from '../../context/CartContext.jsx'
import CartLineItem from './CartLineItem.jsx'
import CartSummary from './CartSummary.jsx'

function Sacola() {
  const { items, updateQuantity, removeItem, subtotal } = useCart()

  return (
    <Container className="flex flex-col gap-6 py-12">
      <Breadcrumb
        items={[{ label: 'Início', href: '/' }, { label: 'Sacola' }]}
      />

      <h1 className="font-display text-48 leading-none text-ink">Sua sacola</h1>

      {items.length === 0 ? (
        /* O design não tem estado vazio; o texto abaixo foi escrito para o
           mock, no tom das outras telas. */
        <div className="flex flex-col items-start gap-4 py-16">
          <h2 className="font-display text-24 text-ink">
            Sua sacola está vazia.
          </h2>

          <p className="max-w-[420px] text-16 text-ink-70">
            Nada por aqui ainda. O acervo é pequeno e muda a cada fornada —
            vale começar pela coleção completa.
          </p>

          <Button as={Link} to="/loja" variant="cta" size="sm" className="mt-2">
            Ver toda a coleção
          </Button>
        </div>
      ) : (
        <div className="grid gap-10 pt-4 desktop:grid-cols-12">
          <div className="flex flex-col gap-8 desktop:col-span-8">
            <ul className="divide-y divide-ink-10 border-y border-ink-10">
              {items.map((item) => (
                <CartLineItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={updateQuantity}
                  onRemove={removeItem}
                />
              ))}
            </ul>

            <Link
              to="/loja"
              className="text-14 text-ink underline underline-offset-4 transition-colors duration-200 hover:text-coral"
            >
              ← Continuar comprando
            </Link>
          </div>

          <aside className="desktop:col-span-4">
            <CartSummary subtotal={subtotal} />
          </aside>
        </div>
      )}
    </Container>
  )
}

export default Sacola
