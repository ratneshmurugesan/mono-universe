import { useRef, useState, ReactNode, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

import { useSoundSystem } from '@mono-universe/frontend/shared/sound-system'
import { MonoBox, MonoFlexBox, MonoGridBox } from '../../atoms/mono-box'
import { MonoButton } from '../../atoms/mono-button'
import { MonoText } from '../../atoms/mono-text'
import { StyledModalUnderlay, StyledModalWithVariants } from './styles'
import { useMonoModal } from './use-mono-modal'
import { useReactStately } from '@mono-universe/frontend/shared/hooks'

export type TMonoModal = {
  name: string
  title: string
  childComponent: ReactNode
}

export function MonoModal(props: TMonoModal) {
  const { modalProps, useOverlay, FocusScope, useDialog } = useMonoModal()
  const { useOverlayTriggerState } = useReactStately()
  const state = useOverlayTriggerState({ type: 'dialog' })
  const [searchParams, setSearchParams] = useSearchParams()
  const { title, childComponent } = props
  const name = searchParams.get('name')
  const pos = searchParams.get('pos')
  const [view, setView] = useState(pos ? pos : 'left')
  const isModalMountedRef = useRef(true)
  const isOpen = state.isOpen

  const { playOnButtonClick, playOnButtonRelease } = useSoundSystem()
  const onPressStart = () => playOnButtonClick()
  const onPressEnd = () => playOnButtonRelease()

  const mouseEventHandlersWithSoundProps = {
    onPressStart,
    onPressEnd,
  }

  useEffect(() => {
    if (isModalMountedRef.current) {
      if (name && pos) {
        state.open()
        setView(pos)
        isModalMountedRef.current = false
      } else {
        state.close()
      }
    }
    return () => {
      isModalMountedRef.current = true // and pass true to next render
    }
  }, [state, name, pos])

  const overlayRef = useRef<HTMLDivElement | null>(null)
  const { overlayProps, underlayProps } = useOverlay(props, overlayRef)
  const { dialogProps, titleProps } = useDialog(props, overlayRef)

  const handleModalViewChange = (view: string) => {
    searchParams.set('pos', view)
    setSearchParams(searchParams)
    setView(view)
  }

  const handleModalCloseClick = () => {
    if (name && pos) {
      searchParams.delete('name')
      searchParams.delete('pos')
      setSearchParams(searchParams)
      state.close()
      isModalMountedRef.current = true
    }
  }

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
                  onPress={() => handleModalViewChange('left')}
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
                  onPress={() => handleModalViewChange('right')}
                >
                  Right
                </MonoButton>
              </MonoFlexBox>
              <MonoBox>
                <MonoButton {...mouseEventHandlersWithSoundProps} onPress={handleModalCloseClick}>
                  X
                </MonoButton>
              </MonoBox>
            </MonoFlexBox>
            <MonoBox>
              <MonoText variant="heading1" {...titleProps}>
                {title}
              </MonoText>
              <MonoBox>{childComponent}</MonoBox>
            </MonoBox>
          </MonoGridBox>
        </StyledModalWithVariants>
      </FocusScope>
    </StyledModalUnderlay>
  ) : null
}
