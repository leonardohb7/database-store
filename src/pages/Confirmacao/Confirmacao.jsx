/**
 * Stub. Tela Confirmação — implementar a partir do node 30:5633.
 *
 * Já recebe o número do pedido pelo state da rota, mandado pelo /checkout
 * (src/pages/Pedido/Pedido.jsx). A linha abaixo só torna isso visível até a
 * tela existir de verdade — não é o design.
 */

import { useLocation } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'

function Confirmacao() {
  const { state } = useLocation()

  return (
    <Container className="py-20">
      <h1 className="text-48">Confirmação</h1>

      {state?.numeroPedido && (
        <p className="mt-4 text-16 text-ink-70">Pedido {state.numeroPedido}</p>
      )}
    </Container>
  )
}

export default Confirmacao
