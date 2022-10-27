import { color } from '@mono-universe/design-system/shared/design-tokens'
import { proxy } from 'valtio'
import { TModelState } from '../types'

export const useCustomState = () => {
  // Using a Valtio state model to bridge reactivity between
  // the canvas and the dom, both can write to it and/or react to it.
  const state: TModelState = proxy({
    current: null,
    items: {
      laces: color.red,
      mesh: '#ffffff',
      caps: '#ffffff',
      inner: '#ffffff',
      sole: '#ffffff',
      stripes: '#ffffff',
      band: '#ffffff',
      patch: '#ffffff',
    },
  })

  return {
    state,
  }
}
