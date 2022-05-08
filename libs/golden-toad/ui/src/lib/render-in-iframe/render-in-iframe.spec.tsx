import { render } from '@testing-library/react';

import RenderInIFrame from './render-in-iframe';

describe('RenderInIFrame', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RenderInIFrame />);
    expect(baseElement).toBeTruthy();
  });
});
