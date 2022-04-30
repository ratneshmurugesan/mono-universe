import { render } from '@testing-library/react';

import Text from './text';

describe('Text', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Text />);
    expect(baseElement).toBeTruthy();
  });

  it('should have text', () => {
    const { getByText } = render(<Text />);
    expect(getByText('First Text!')).toBeDefined()
  })
});
