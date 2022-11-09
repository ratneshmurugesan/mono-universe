import { MonoButton, MonoModal } from '@mono-universe/frontend/shared/design-system'
import { useReactStately } from '@mono-universe/frontend/shared/hooks'
import { Outlet } from 'react-router-dom'

export const PrototypeA = () => {
  const { useOverlayTriggerState } = useReactStately()
  const state = useOverlayTriggerState({
    type: 'dialog',
  })

  console.log({ state })
  return (
    <>
      <div>PrototypeA</div>
      <MonoButton onPress={() => state.open()}>Open Dialog</MonoButton>
      <Outlet />
      {state.isOpen && (
        <MonoModal title="Test" isOpen onClose={() => state.close()} isDismissable>
          Hi
        </MonoModal>
      )}
    </>
  )
}
