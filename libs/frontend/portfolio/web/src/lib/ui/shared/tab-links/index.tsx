import { MonoBox, MonoText } from '@mono-universe/frontend/shared/design-system'
import { Link } from 'react-router-dom'
import { routeData } from '../../../data-access'
import { TRouteObj } from '../../../types'

interface ITabLinks {
  routesDataLink?: TRouteObj[] | []
}

export function TabLinks({ routesDataLink }: ITabLinks) {
  const routesForLink = routesDataLink?.length ? routesDataLink : routeData
  return (
    <MonoBox my="10px">
      {routesForLink
        .filter(obj => obj.path !== '*')
        .map(obj => (
          // <Link key={obj.id} to={`/${obj['path']}`}> // with slash, things work differently - absolute links
          /* below, without slash - relative links */
          <Link key={obj.id} to={`${obj['path']}`}>
            <MonoText variant="link">{obj['name']}</MonoText>
          </Link>
        ))}
    </MonoBox>
  )
}
