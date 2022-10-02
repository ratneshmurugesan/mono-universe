import { useSnapshot } from 'valtio'
import { TModelState } from '../types'

declare module 'valtio' {
  function useSnapshot<T extends object>(p: T): T
}

export const useCustomSnapshot = (state: TModelState) => {
  const snap = useSnapshot(state) as typeof state

  return { snap }
}
