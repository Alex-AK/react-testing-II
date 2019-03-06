import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Controls from './Controls';

describe('<Controls />', () => {
  it('renders without failing', () => {
    render(<Controls />);
  });
});
