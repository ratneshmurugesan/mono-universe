import { useSoundSystem } from '@mono-universe/frontend/shared/sound-system'
import { useRef, useState, ReactNode } from 'react'
import { MonoBox, MonoFlexBox, MonoGridBox } from '../../atoms/mono-box'
import { MonoButton } from '../../atoms/mono-button'
import { MonoText } from '../../atoms/mono-text'
import { StyledModalUnderlay, StyledModalWithVariants } from './styles'
import { useMonoModal } from './use-mono-modal'

export type TMonoModal = {
  name: string
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
          <MonoGridBox>
            <MonoFlexBox variant="flexRow" justifyContent="space-between">
              <MonoFlexBox variant="flexRow" justifyContent="space-between" alignItems="flex-start">
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
            <MonoBox>
              <MonoText variant="heading1" {...titleProps}>
                {title}
              </MonoText>
              <MonoBox>{children}</MonoBox>
            </MonoBox>
          </MonoGridBox>
        </StyledModalWithVariants>
      </FocusScope>
    </StyledModalUnderlay>
  ) : null
}
