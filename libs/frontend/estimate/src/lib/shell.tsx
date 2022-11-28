import { TRouteElementMap } from '@mono-universe/frontend/shared/common-types'
import { constructRoute } from '@mono-universe/frontend/shared/ui'
import { routeData } from './data-access'
import { Home } from './ui/home'

const routeElementMap: TRouteElementMap = {
  estimateHome: Home,
}

const estimateShellRoutes = routeData.map(routeObj => constructRoute(routeElementMap, routeObj))

export const estimateRoutes = estimateShellRoutes
