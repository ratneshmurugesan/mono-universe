import { SetStateAction, useEffect, useState } from 'react'
import { getCursor } from '../svgs'
import { useCustomSnapshot } from './useCustomSnapshot'
import { useCustomState } from './useCustomState'

type TGroupEvent = {
  intersections: []
  stopPropagation: () => void
  object: {
    material: {
      name: SetStateAction<null>
    }
  }
}

export const useCustomCursor = () => {
  const { state } = useCustomState()
  const { snap } = useCustomSnapshot(state)

  // Cursor showing current color
  const [hovered, setHoveredObjName] = useState(null)

  useEffect(() => {
    if (hovered) {
      const hoveredItemColor = snap.items[hovered]
      const hoveredItem = hovered
      const cursor = getCursor(hoveredItem, hoveredItemColor)
      const convertedCursorStr = btoa(cursor)
      // const convertedAutoStr = Buffer.from(auto, 'base64').toString('base64')

      document.body.style.cursor = `url('data:image/svg+xml;base64,${convertedCursorStr}'), auto`
      // document.body.style.cursor = `url('data:image/svg+xml;base64,${convertedAutoStr}'), auto`;
    }
  }, [hovered, snap])

  const handleOnPointerOver = (e: TGroupEvent) => {
    e.stopPropagation()
    setHoveredObjName(e.object.material.name)
  }

  const handleOnPointerClick = (e: TGroupEvent) => {
    e.stopPropagation()
    // const name = e.object.material.name
    // console.log('handleOnMaterialClick', { e, name })
    // state.current = name
  }

  const handleOnPointerMissed = () => (state.current = null)

  const handleOnPointerOut = (e: TGroupEvent) =>
    e.intersections.length === 0 && setHoveredObjName(null)

  return {
    handleOnPointerOver,
    handleOnPointerClick,
    handleOnPointerMissed,
    handleOnPointerOut,
  }
}
