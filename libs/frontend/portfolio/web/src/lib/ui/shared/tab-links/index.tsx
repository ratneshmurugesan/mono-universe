import { NavLink } from 'react-router-dom'
import { routeData } from '../../../data-access'
import { TRouteObj } from '../../../types'

interface ITabLinks {
  routesDataLink?: TRouteObj[] | []
}

export function TabLinks({ routesDataLink }: ITabLinks) {
  const routesForLink = routesDataLink?.length ? routesDataLink : routeData
  return (
    <>
      {routesForLink.map(obj => (
        // <NavLink key={obj.id} to={`/${obj['path']}`}> // with slash, things work differently
        <NavLink key={obj.id} to={`${obj['path']}`}>
          {obj['name']}
        </NavLink>
      ))}
    </>
  )
}
