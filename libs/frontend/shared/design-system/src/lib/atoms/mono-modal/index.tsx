import { useRef, ReactNode } from 'react'
import { StyledModalUnderlay } from './styles'
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
  const { title, children } = props

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const overlayRef = useRef<HTMLDivElement | null>(null)
  const { overlayProps, underlayProps } = useOverlay(props, overlayRef)
  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, overlayRef)

  return (
    <StyledModalUnderlay {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={overlayRef}
          style={{
            background: 'white',
            color: 'black',
            padding: 30,
          }}
        >
          <div>
            <h3 {...titleProps}>{title}</h3>
          </div>
          <div> {children}</div>
        </div>
      </FocusScope>
    </StyledModalUnderlay>
  )
}
