import {
  PathRouteProps,
  LayoutRouteProps,
  IndexRouteProps,
} from 'react-router-dom'

export type TRouteObjProps = JSX.IntrinsicAttributes &
  (PathRouteProps | LayoutRouteProps | IndexRouteProps)

export type TRouteElementMap = {
  [key: string]: () => JSX.Element
}

export type TRouteData = {
  id: string
  name: string
  path: string
  element?: JSX.Element
}
