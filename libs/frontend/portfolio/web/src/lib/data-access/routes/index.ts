import { TRouteObj } from '../../types'
import { prototypeRoutes } from './prototypes'

export const routeData: TRouteObj[] = [
  {
    id: 'home',
    name: 'Home',
    path: '',
    subPages: [],
  },
  prototypeRoutes,
  {
    id: 'about',
    name: 'About',
    path: 'about',
    subPages: [],
  },
  {
    id: 'contact',
    name: 'Contact',
    path: 'contact',
    subPages: [],
  },
  {
    id: 'notFound',
    name: '',
    path: '*',
    subPages: [],
  },
]
