import { NavLink } from 'react-router-dom'
import { TRouteData } from '../../../types'

interface ITabLinks {
  routeData: TRouteData[]
}

export function TabLinks({ routeData }: ITabLinks) {
  return (
    <>
      {routeData.map((obj) => (
        <NavLink key={obj.id} to={`/${obj['path']}`}>{obj['name']}</NavLink>
      ))}
    </>
  )
}

export default TabLinks
