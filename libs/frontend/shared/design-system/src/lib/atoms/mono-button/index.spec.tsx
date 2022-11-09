import { render, screen } from '@testing-library/react'
import { MonoButton } from '.'

describe('MonoButton', () => {
  it('should render successfully', () => {
    render(<MonoButton onPress={() => null} />)
    const baseElement = screen.getByRole('button', {})
    expect(baseElement).toHaveProperty('type', 'button')
  })
})
