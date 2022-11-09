import { MonoButton, MonoFlexBox, MonoText } from '@mono-universe/frontend/shared/design-system'
import { useSoundSystem } from '@mono-universe/frontend/shared/sound-system'

export const PrototypeA = () => {
  const { playOnButtonClick, playOnButtonRelease } = useSoundSystem()
  const handleOnMouseDown = () => playOnButtonClick()
  const handleOnMouseUp = () => playOnButtonRelease()
  return (
    <MonoFlexBox variant="flexCol">
      <MonoText variant="display">Simple button (better UX with sound)</MonoText>
      <MonoButton
        onPress={() => null}
        onPressStart={handleOnMouseDown}
        onPressEnd={handleOnMouseUp}
      />
    </MonoFlexBox>
  )
}
