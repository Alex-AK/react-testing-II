import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without failing', () => {
    render(<Dashboard />);
  });
});
