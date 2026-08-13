/**
 * Abas da nav do perfil — node 30:5852, na ordem em que aparecem.
 *
 * "Sair" não entra aqui: fecha a lista no design, mas é ação, não aba (ver
 * ProfileNav.jsx). Mora em módulo próprio porque a Perfil precisa dos rótulos
 * para o heading das abas ainda sem tela, e a nav precisa dos ícones.
 */

import IconConta from '../../components/ui/icons/IconConta.jsx'
import IconEngrenagem from '../../components/ui/icons/IconEngrenagem.jsx'
import IconFavoritos from '../../components/ui/icons/IconFavoritos.jsx'
import IconLocal from '../../components/ui/icons/IconLocal.jsx'
import IconPacote from '../../components/ui/icons/IconPacote.jsx'

export const ABAS = [
  { id: 'visao-geral', label: 'Visão geral', Icone: IconConta },
  { id: 'pedidos', label: 'Pedidos', Icone: IconPacote },
  { id: 'favoritos', label: 'Favoritos', Icone: IconFavoritos },
  { id: 'enderecos', label: 'Endereços', Icone: IconLocal },
  { id: 'configuracoes', label: 'Configurações', Icone: IconEngrenagem },
]
