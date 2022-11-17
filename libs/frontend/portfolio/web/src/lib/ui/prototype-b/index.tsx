import {
  MonoText,
  MonoModal,
  MonoButton,
  MonoFlexBox,
} from '@mono-universe/frontend/shared/design-system'
import { useReactStately } from '@mono-universe/frontend/shared/hooks'
import { useSoundSystem } from '@mono-universe/frontend/shared/sound-system'
import { Outlet } from 'react-router-dom'

export const PrototypeB = () => {
  const { useOverlayTriggerState } = useReactStately()
  const state = useOverlayTriggerState({ type: 'dialog' })

  const { playOnButtonClick, playOnButtonRelease } = useSoundSystem()
  const handleOnMouseDown = () => playOnButtonClick()
  const handleOnMouseUp = () => playOnButtonRelease()

  return (
    <MonoFlexBox variant="flexCol">
      <MonoText variant="display">Open Dialog (with sound)</MonoText>
      <MonoButton
        onPress={() => state.open()}
        onPressStart={handleOnMouseDown}
        onPressEnd={handleOnMouseUp}
      />
      <Outlet />
      <MonoModal title="Test" isOpen={state.isOpen} onClose={() => state.close()} isDismissable>
        Test Modal
      </MonoModal>
    </MonoFlexBox>
  )
}
