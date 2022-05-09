import { render } from '@testing-library/react';

import { PostDrawer } from './post-drawer';

describe('CustomDrawer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PostDrawer />);
    expect(baseElement).toBeTruthy();
  });
});
