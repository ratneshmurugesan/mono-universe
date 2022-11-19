import { MonoFlexBox, MonoText } from '@mono-universe/frontend/shared/design-system'
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
      {routesForLink
        .filter(obj => obj.path !== '*')
        .map(obj => (
          // <NavLink key={obj.id} to={`/${obj['path']}`}> // with slash, things work differently - absolute links
          /* below, without slash - relative links */
          <NavLink key={obj.id} to={`${obj['path']}`}>
            <MonoFlexBox variant="flexRow" alignItems="stretch">
              <MonoText variant="link">{obj['name']}</MonoText>
            </MonoFlexBox>
          </NavLink>
        ))}
    </>
  )
}
