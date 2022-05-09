import { render } from '@testing-library/react';

import { ProfileDrawer } from './profile-drawer';

describe('CustomDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProfileDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
