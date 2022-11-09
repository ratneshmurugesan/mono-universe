import { RefObject } from 'react'
import {
  DialogAria,
  OverlayAria,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
  FocusScope,
  FocusScopeProps,
  ModalAria,
  AriaModalOptions,
} from 'react-aria'

interface IUseReactAria {
  FocusScope: (props: FocusScopeProps) => JSX.Element
  // OverlayContainer: (props: OverlayContainerProps) => React.ReactPortal
  // OverlayProvider: (props: any) => JSX.Element
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useDialog: (props: any, ref: RefObject<any>) => DialogAria
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useOverlay: (props: any, ref: RefObject<Element>) => OverlayAria
  usePreventScroll: () => void
  useModal: (options?: AriaModalOptions) => ModalAria
}

export function useReactAria(): IUseReactAria {
  return {
    FocusScope,
    useDialog,
    useModal,
    useOverlay,
    usePreventScroll,
  }
}
