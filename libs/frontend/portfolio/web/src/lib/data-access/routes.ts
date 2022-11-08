import { TRouteObj } from '../types'

const prototypeRoutes = {
  id: 'prototypes',
  name: 'Prototypes',
  path: 'prototypes',
  subPages: [
    {
      id: 'prototypeA',
      name: 'Prototype A',
      path: 'prototypeA',
      subPages: [],
    },
    {
      id: 'prototypeB',
      name: 'Prototype B',
      path: 'prototypeB',
      subPages: [],
    },
  ],
}
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
