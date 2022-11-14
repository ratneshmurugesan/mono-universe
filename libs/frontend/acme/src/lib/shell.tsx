import { lazy } from 'react'

import { TRouteElementMap } from '@mono-universe/frontend/shared/common-types'
import { constructRoute } from '@mono-universe/frontend/shared/ui'

import { routeData } from './data-access'

const dynamicImport = () => import('./ui/home')
const LazyAcmeHome = lazy(dynamicImport)

const routeElementMap: TRouteElementMap = {
  acmeHome: LazyAcmeHome,
}

const acmeShellRoutes = routeData.map(routeObj => constructRoute(routeElementMap, routeObj))

export const acmeRoutes = acmeShellRoutes
