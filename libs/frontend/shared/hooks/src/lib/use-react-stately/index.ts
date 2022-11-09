import { useOverlayTriggerState } from 'react-stately'

export interface UseReactStately {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  useOverlayTriggerState: (props: any) => any
}

export function useReactStately(): UseReactStately {
  return {
    useOverlayTriggerState,
  }
}
