import { NavItem } from '../interfaces/menu.interface';

export const navItems: NavItem[] = [
  {
    routeLink: '',
    icon: 'bi bi-house',
    label: 'Dashboard'
  },
  {
    routeLink: '/estates',
    icon: 'bi bi-buildings',
    label: 'Inmuebles',
    items: [
      {
        routeLink: 'estates/list',
        label: 'Lista de Inmuebles'
      },
      {
        routeLink: 'estates/add',
        label: 'Añadir Inmueble'
      },
    ]
  },
  {
    routeLink: '/contracts',
    icon: 'bi bi-file-earmark-post',
    label: 'Contratos'
  },
  {
    routeLink: '/walet',
    icon: 'bi bi-wallet',
    label: 'Cartera'
  },
]

export function getContainerClass(collapsed: boolean, screenWidth: number) {

  if (!collapsed && screenWidth > 768) return 'cont-trimmed';

  if (!collapsed && screenWidth <= 768 && screenWidth > 0) return 'cont-md';

  return '';

}
