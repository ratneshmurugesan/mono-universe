import { MonoText, MonoButton, MonoFlexBox } from '@mono-universe/frontend/shared/design-system'
import { useSoundSystem } from '@mono-universe/frontend/shared/sound-system'
import { Outlet, useSearchParams } from 'react-router-dom'

export const PrototypeB = () => {
  const [, setSearchParams] = useSearchParams()

  const { playOnButtonClick, playOnButtonRelease } = useSoundSystem()
  const handleOnMouseDown = () => playOnButtonClick()
  const handleOnMouseUp = () => playOnButtonRelease()

  const handleOpenDialogButtonClick = () => {
    setSearchParams({ name: 'prototype', pos: 'right' })
  }

  return (
    <MonoFlexBox variant="flexCol">
      <MonoText variant="display">Open Dialog (with sound)</MonoText>
      <MonoButton
        onPress={handleOpenDialogButtonClick}
        onPressStart={handleOnMouseDown}
        onPressEnd={handleOnMouseUp}
      />
      <Outlet />
    </MonoFlexBox>
  )
}
