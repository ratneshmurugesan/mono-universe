import { RouteProps } from 'react-router-dom'

export type TRouteElementMap = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export type TRouteObj = {
  id: string
  name: string
  subPages: TRouteObj[]
} & RouteProps
