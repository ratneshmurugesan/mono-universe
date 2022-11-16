import { Outlet } from 'react-router-dom'

import { flatArray } from '@mono-universe/frontend/shared/utils'
import { routeData } from '../../data-access'
import { TRouteObj } from '../../types'
import { TabLinks } from '../shared/tab-links'
import { MonoFlexBox } from '@mono-universe/frontend/shared/design-system'

export function Prototypes() {
  const pageId = 'prototypes'
  const subPagesId = 'subPages'

  const flatRouteData = (array: TRouteObj[]) => flatArray(array, subPagesId)
  const flattenRoutes = flatRouteData(routeData)
  const prototypePageRoutes = flattenRoutes.find((obj: TRouteObj) => obj.id === pageId)?.subPages

  return (
    <>
      <TabLinks routesDataLink={prototypePageRoutes} />
      <MonoFlexBox>
        <Outlet />
      </MonoFlexBox>
    </>
  )
}
