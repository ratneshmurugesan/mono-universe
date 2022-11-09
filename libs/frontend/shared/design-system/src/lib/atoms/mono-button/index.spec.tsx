import { render, screen } from '@testing-library/react'
import { MonoButton } from '.'

describe('MonoButton', () => {
  it('should render successfully', () => {
    render(<MonoButton onPress={() => null}>Test Mono button</MonoButton>)
    const baseElement = screen.getByRole('button', { name: /test/i })
    expect(baseElement).toHaveProperty('type', 'button')
  })
})
