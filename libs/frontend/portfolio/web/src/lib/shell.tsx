import { routeData } from './data-access'

import { Route } from 'react-router-dom'
import { Home } from './ui/home'
import { Prototypes } from './ui/prototypes'
import { PrototypeA } from './ui/prototype-a'
import { PrototypeB } from './ui/prototype-b'
import { Contact } from './ui/contact'
import About from './ui/about'
import { NotFound } from './ui/not-found'
import { TRouteElementMap, TRouteObj } from './types'

const routeElementMap: TRouteElementMap = {
  home: Home,
  prototypes: Prototypes,
  prototypeA: PrototypeA,
  prototypeB: PrototypeB,
  contact: Contact,
  about: About,
  notFound: NotFound,
}

const constructRoute = (routeObj: TRouteObj) => {
  const { id, path, index, subPages } = routeObj
  const _index = index ?? false
  // console.log({ id, path, index, element, subPages });
  const Element = routeElementMap[routeObj['id']]
  if (!subPages.length) return <Route key={id} index={_index} path={path} element={<Element />} />
  return (
    <Route key={id} path={path} element={<Element />}>
      {subPages.map(constructRoute)}
    </Route>
  )
}

const portfolioRoutes = routeData.map(constructRoute)

export const portfolioShellRoutes = portfolioRoutes
