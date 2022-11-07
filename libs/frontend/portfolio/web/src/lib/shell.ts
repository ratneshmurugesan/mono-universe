import { routeData } from './data-access'
import { TRouteElementMap } from './types'
import About from './ui/about'
import Contact from './ui/contact'
import Home from './ui/home'

const routeElementMap: TRouteElementMap = {
  home: Home,
  contact: Contact,
  about: About,
}

const routes = routeData.map((obj) => ({
  ...obj,
  element: routeElementMap[obj['id']],
}))

export const portfolioShell = {
  portfolioShellRoutes: routes,
}
