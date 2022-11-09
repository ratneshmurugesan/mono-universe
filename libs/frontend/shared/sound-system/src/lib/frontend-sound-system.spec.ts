import { renderHook, act } from '@testing-library/react'
import { useSoundSystem } from './frontend-sound-system'

describe('soundSystem', () => {
  it('should change button state from idle to pressed and with some styles', () => {
    const { result } = renderHook(() => useSoundSystem())
    // console.log({ result: typeof result.current.playOnButtonClick })
    act(() => {
      result.current.playOnButtonClick()
    })

    expect(typeof result.current.playOnButtonClick).toEqual('function')
  })
})
