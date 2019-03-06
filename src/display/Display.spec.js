import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Display from './Display';

describe('<Display />', () => {
  it('renders without failing', () => {
    render(<Display />);
  });
});
