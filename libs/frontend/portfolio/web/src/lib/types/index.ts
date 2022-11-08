import { RouteProps } from 'react-router-dom'

export type TRouteElementMap = {
  [key: string]: () => JSX.Element
}

export type TRouteObj = {
  id: string
  name: string
  subPages: TRouteObj[]
} & RouteProps
