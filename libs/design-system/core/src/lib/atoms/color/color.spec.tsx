import { render } from '@testing-library/react'

import { Primary } from './color.stories'

describe('Color', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Primary {...Primary.args} />)
    expect(baseElement).toBeTruthy()
  })
})
