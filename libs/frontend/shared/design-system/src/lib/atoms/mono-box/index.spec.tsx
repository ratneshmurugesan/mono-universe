import { render } from '@testing-library/react'
import { MonoBox } from './'

describe('MonoBox', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonoBox />)
    expect(baseElement).toBeTruthy()
  })
})
