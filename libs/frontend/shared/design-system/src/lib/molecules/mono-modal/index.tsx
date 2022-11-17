import { useSoundSystem } from '@mono-universe/frontend/shared/sound-system'
import { useRef, useState, ReactNode } from 'react'
import { MonoBox, MonoFlexBox } from '../../atoms/mono-box'
import { MonoButton } from '../../atoms/mono-button'
import { StyledModalUnderlay, StyledModalWithVariants } from './styles'
import { useMonoModal } from './use-mono-modal'

type TMonoModal = {
  title: string
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  isDismissable: boolean
}

export function MonoModal(props: TMonoModal) {
  const { modalProps, useOverlay, FocusScope, useDialog } = useMonoModal()
  const { title, children, isOpen, onClose } = props
  const [view, setView] = useState('rightSide')

  const { playOnButtonClick, playOnButtonRelease } = useSoundSystem()
  const onPressStart = () => playOnButtonClick()
  const onPressEnd = () => playOnButtonRelease()

  const mouseEventHandlersWithSoundProps = {
    onPressStart,
    onPressEnd,
  }

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const { overlayProps, underlayProps } = useOverlay(props, overlayRef)
  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, overlayRef)

  const handleModalViewChange = (view: string) => setView(view)

  const selectedVariant = view
  return isOpen ? (
    <StyledModalUnderlay {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <StyledModalWithVariants
          variant={selectedVariant}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={overlayRef}
        >
          <MonoFlexBox variant="flexRow" justifyContent="space-between">
            <MonoFlexBox variant="flexRow" justifyContent="space-between">
              <MonoButton
                {...mouseEventHandlersWithSoundProps}
                onPress={() => handleModalViewChange('leftSide')}
              >
                Left
              </MonoButton>
              <MonoButton
                {...mouseEventHandlersWithSoundProps}
                onPress={() => handleModalViewChange('center')}
              >
                Center
              </MonoButton>
              <MonoButton
                {...mouseEventHandlersWithSoundProps}
                onPress={() => handleModalViewChange('rightSide')}
              >
                Right
              </MonoButton>
            </MonoFlexBox>
            <MonoBox>
              <MonoButton {...mouseEventHandlersWithSoundProps} onPress={onClose}>
                X
              </MonoButton>
            </MonoBox>
          </MonoFlexBox>
          <h3 {...titleProps}>{title}</h3>
          <div> {children}</div>
        </StyledModalWithVariants>
      </FocusScope>
    </StyledModalUnderlay>
  ) : null
}
