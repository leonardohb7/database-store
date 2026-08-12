/**
 * PageShell — casca de todas as rotas: header fixo, conteúdo e footer.
 * Usado como layout route; `children` existe só para quem quiser montar a
 * casca fora do router.
 */

import { Outlet } from 'react-router-dom'
import Footer from './Footer.jsx'
import Header from './Header.jsx'

function PageShell({ children }) {
  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <Header />
      <main className="flex-1">{children ?? <Outlet />}</main>
      <Footer />
    </div>
  )
}

export default PageShell
