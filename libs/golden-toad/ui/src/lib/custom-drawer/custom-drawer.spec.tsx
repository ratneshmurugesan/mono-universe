import { render } from '@testing-library/react';

import { CustomDrawer } from './custom-drawer';

describe('CustomDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CustomDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
