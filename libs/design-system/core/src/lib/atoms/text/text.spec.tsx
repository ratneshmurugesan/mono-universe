import { render } from '@testing-library/react'

import { Primary } from './text.stories'

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Primary {...Primary.args} />)
    expect(baseElement).toBeTruthy()
  })

  it('should have text', () => {
    const { getByText } = render(<Primary {...Primary.args} />)
    expect(getByText('First Text!')).toBeDefined()
  })
})
