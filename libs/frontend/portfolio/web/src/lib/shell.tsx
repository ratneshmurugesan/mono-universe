import { routeData } from './data-access'

import { Route } from 'react-router-dom'
import { TRouteElementMap, TRouteObj } from './types'
import { lazy, Suspense } from 'react'
import { Contact, Home, NotFound, PrototypeA, PrototypeX, PrototypeB, Prototypes } from './ui'

const dynamicImport = () => import('./ui/about')
const LazyAbout = lazy(dynamicImport)

const routeElementMap: TRouteElementMap = {
  home: Home,
  prototypes: Prototypes,
  prototypeA: PrototypeA,
  prototypeX: PrototypeX,
  prototypeB: PrototypeB,
  contact: Contact,
  about: LazyAbout,
  notFound: NotFound,
}

const constructRoute = (routeObj: TRouteObj) => {
  const { id, path, index, subPages } = routeObj
  const _index = index ?? false
  // console.log({ id, path, index, element, subPages });
  const Element = routeElementMap[routeObj['id']]
  if (!subPages.length)
    return (
      <Route
        key={id}
        index={_index}
        path={path}
        element={
          <Suspense fallback={'Loading..'}>
            <Element />
          </Suspense>
        }
      />
    )
  return (
    <Route
      key={id}
      path={path}
      element={
        <Suspense fallback={'Loading..'}>
          <Element />
        </Suspense>
      }
    >
      {subPages.map(constructRoute)}
    </Route>
  )
}

const portfolioShellRoutes = routeData.map(constructRoute)

export const portfolioRoutes = portfolioShellRoutes
