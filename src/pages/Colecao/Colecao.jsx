/** Stub. Tela Coleção — implementar a partir do node 30:4277. */

import { useSearchParams } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'

function Colecao() {
  const [searchParams] = useSearchParams()
  const categoria = searchParams.get('categoria')

  return (
    <Container className="py-20">
      <h1 className="text-48">Coleção</h1>
      {categoria && <p className="mt-4 text-slate">Categoria: {categoria}</p>}
    </Container>
  )
}

export default Colecao
