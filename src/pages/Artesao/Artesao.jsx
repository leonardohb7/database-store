/** Stub. Tela Artesão — implementar a partir do node 30:4928. */

import { useParams } from 'react-router-dom'
import Container from '../../components/layout/Container.jsx'

function Artesao() {
  const { slug } = useParams()

  return (
    <Container className="py-20">
      <h1 className="text-48">Artesão</h1>
      <p className="mt-4 text-slate">{slug}</p>
    </Container>
  )
}

export default Artesao
