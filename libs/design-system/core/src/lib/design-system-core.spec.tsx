import { render } from '@testing-library/react';

import DesignSystemCore from './design-system-core';

describe('DesignSystemCore', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DesignSystemCore />);
    expect(baseElement).toBeTruthy();
  });
});
