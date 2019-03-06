import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without failing', () => {
    render(<Dashboard />);
  });
});
