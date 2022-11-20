import { Outlet } from 'react-router-dom'

import { flatArray } from '@mono-universe/frontend/shared/utils'
import { routeData } from '../../data-access'
import { TRouteObj } from '../../types'
import { TabLinks } from '../shared/tab-links'
import { MonoFlexBox, MonoGridBox } from '@mono-universe/frontend/shared/design-system'

export function Prototypes() {
  const pageId = 'prototypes'
  const subPagesId = 'subPages'

  const flatRouteData = (array: TRouteObj[]) => flatArray(array, subPagesId)
  const flattenRoutes = flatRouteData(routeData)
  const prototypePageRoutes = flattenRoutes.find((obj: TRouteObj) => obj.id === pageId)?.subPages

  return (
    <MonoGridBox gridTemplateRows="auto 1fr">
      <MonoFlexBox variant="flexRow" justifyContent="space-around" alignItems="center">
        <TabLinks routesDataLink={prototypePageRoutes} />
      </MonoFlexBox>
      <MonoFlexBox>
        <Outlet />
      </MonoFlexBox>
    </MonoGridBox>
  )
}
