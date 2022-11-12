import { TRouteElementMap, TRouteObj } from '@mono-universe/frontend/shared/common-types'
import { Suspense } from 'react'
import { Route } from 'react-router-dom'

export const constructRoute = (routeElementMap: TRouteElementMap, routeObj: TRouteObj) => {
    const { id, path, index, subPages } = routeObj
    const _index = index ?? false
    // console.log({ id, path, index, element, subPages });
    const Element = routeElementMap[routeObj['id']]
    if (!subPages.length)
        return (
            <Route
                key={id}
                index={_index}
                path={path}
                element={
                    <Suspense fallback={'Loading..'}>
                        <Element />
                    </Suspense>
                }
            />
        )
    return (
        <Route
            key={id}
            path={path}
            element={
                <Suspense fallback={'Loading..'}>
                    <Element />
                </Suspense>
            }
        >
            {subPages.map((routeObj) => constructRoute(routeElementMap, routeObj))}
        </Route>
    )
}