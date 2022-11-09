import { useReactAria } from '@mono-universe/frontend/shared/hooks'

export const useMonoModal = () => {
  const { FocusScope, useOverlay, usePreventScroll, useModal, useDialog } = useReactAria()

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll()
  const { modalProps } = useModal()

  return {
    modalProps,
    useOverlay,
    FocusScope,
    useDialog,
  }
}
