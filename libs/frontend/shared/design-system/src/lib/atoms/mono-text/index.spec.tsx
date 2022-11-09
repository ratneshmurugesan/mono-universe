import { render } from '@testing-library/react'
import { MonoText } from '.'

describe('MonoText', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MonoText variant="heading2">Test text</MonoText>)
    expect(baseElement).toBeTruthy()
  })
})
