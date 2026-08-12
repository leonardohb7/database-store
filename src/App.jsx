import { Navigate, Route, Routes } from 'react-router-dom'
import PageShell from './components/layout/PageShell.jsx'
import Artesao from './pages/Artesao/Artesao.jsx'
import Artesaos from './pages/Artesaos/Artesaos.jsx'
import Busca from './pages/Busca/Busca.jsx'
import Colecao from './pages/Colecao/Colecao.jsx'
import Confirmacao from './pages/Confirmacao/Confirmacao.jsx'
import Home from './pages/Home/Home.jsx'
import Login from './pages/Login/Login.jsx'
import Pedido from './pages/Pedido/Pedido.jsx'
import Perfil from './pages/Perfil/Perfil.jsx'
import Produto from './pages/Produto/Produto.jsx'
import Sacola from './pages/Sacola/Sacola.jsx'
import Styleguide from './pages/Styleguide/Styleguide.jsx'

function App() {
  return (
    <Routes>
      <Route element={<PageShell />}>
        <Route path="/" element={<Home />} />
        <Route path="/loja" element={<Colecao />} />
        <Route path="/produto/:slug" element={<Produto />} />
        <Route path="/artesao/:slug" element={<Artesao />} />
        <Route path="/artesaos" element={<Artesaos />} />
        <Route path="/sacola" element={<Sacola />} />
        <Route path="/checkout" element={<Pedido />} />
        <Route path="/checkout/confirmacao" element={<Confirmacao />} />
        <Route path="/perfil" element={<Perfil />} />
        <Route path="/entrar" element={<Login />} />
        <Route path="/busca" element={<Busca />} />
      </Route>

      {/* Rota temporária de validação visual dos tokens, fora da casca. */}
      <Route path="/styleguide" element={<Styleguide />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
