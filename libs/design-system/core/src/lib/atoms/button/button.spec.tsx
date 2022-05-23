import '@testing-library/jest-dom'
import { act, render, screen } from '@testing-library/react'

import { Base } from './button.stories'

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Base {...Base.args} />)
    expect(baseElement).toBeTruthy()
  })

  it('should render with text content', () => {
    render(<Base {...Base.args}>Base button for test</Base>)
    expect(screen.getByRole('button')).toHaveTextContent(/base/i)
  })

  it('should render with a snapshot', () => {
    const { container } = render(<Base {...Base.args} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should react when clicked', () => {
    const handleOnClick = jest.fn()
    render(<Base onPress={handleOnClick} />)
    const buttonElement = screen.getByRole('button')
    expect(buttonElement).toBeInTheDocument()
    act(() => buttonElement.click())
    expect(handleOnClick).toHaveBeenCalledTimes(1)
  })
})
