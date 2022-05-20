import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

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
})
