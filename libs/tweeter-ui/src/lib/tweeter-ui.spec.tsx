import React from 'react';
import { render } from '@testing-library/react';

import TweeterUi from './tweeter-ui';

describe('TweeterUi', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<TweeterUi />);
    expect(baseElement).toBeTruthy();
  });
});
