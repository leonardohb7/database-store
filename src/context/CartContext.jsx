/**
 * CartContext — estado da sacola.
 *
 * PERSISTÊNCIA: só em memória (`useState`), por decisão de escopo. Recarregar
 * a página esvazia a sacola — nada de localStorage.
 *
 * Cada item guarda o OBJETO do produto, não o id. O catálogo é estático
 * (src/data/products.js), então não há risco de ficar defasado, e isso mantém
 * o contexto independente da camada de dados — quem chama `addItem` já tem o
 * produto em mãos, e a sacola não precisa resolver id → produto a cada render.
 *
 * Valores em CENTAVOS — ver src/lib/format.js.
 */

import { createContext, useCallback, useContext, useMemo, useState } from 'react'

const CartContext = createContext(null)

/** Mesmo teto por linha do QuantityStepper. */
const MAX_QUANTIDADE = 99

function CartProvider({ children }) {
  /** @type {[{product: object, quantity: number}[], Function]} */
  const [items, setItems] = useState([])

  /* Somar ao que já existe: adicionar a mesma peça duas vezes vira uma linha
     só, que é como o design mostra a sacola (uma linha por peça). */
  const addItem = useCallback((product, quantity = 1) => {
    setItems((atuais) => {
      const existe = atuais.some((item) => item.product.id === product.id)

      if (!existe) {
        return [...atuais, { product, quantity: Math.min(quantity, MAX_QUANTIDADE) }]
      }

      return atuais.map((item) =>
        item.product.id === product.id
          ? {
              ...item,
              quantity: Math.min(item.quantity + quantity, MAX_QUANTIDADE),
            }
          : item,
      )
    })
  }, [])

  const removeItem = useCallback((productId) => {
    setItems((atuais) =>
      atuais.filter((item) => item.product.id !== productId),
    )
  }, [])

  /* Quantidade zero (ou negativa) remove a linha em vez de deixar um item
     fantasma valendo R$ 0 — o stepper trava em 1, mas a API é pública. */
  const updateQuantity = useCallback(
    (productId, quantity) => {
      if (quantity <= 0) {
        removeItem(productId)
        return
      }

      setItems((atuais) =>
        atuais.map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.min(quantity, MAX_QUANTIDADE) }
            : item,
        ),
      )
    },
    [removeItem],
  )

  const clear = useCallback(() => setItems([]), [])

  const { subtotal, itemCount } = useMemo(
    () =>
      items.reduce(
        (acc, { product, quantity }) => ({
          subtotal: acc.subtotal + product.price * quantity,
          itemCount: acc.itemCount + quantity,
        }),
        { subtotal: 0, itemCount: 0 },
      ),
    [items],
  )

  const value = useMemo(
    () => ({
      items,
      addItem,
      removeItem,
      updateQuantity,
      clear,
      subtotal,
      itemCount,
    }),
    [items, addItem, removeItem, updateQuantity, clear, subtotal, itemCount],
  )

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

/* eslint-disable-next-line react-refresh/only-export-components --
   O hook mora junto do provider de propósito: são a mesma API. */
export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart precisa estar dentro de <CartProvider>.')
  }

  return context
}

export default CartProvider
