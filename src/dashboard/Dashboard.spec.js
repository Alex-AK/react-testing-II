import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without failing', () => {
    render(<Dashboard />);
  });

  // check initial state of lock gate and close gate

  // button has disable property on it. ie disable=true

  // test on dashboard ?
  // check if lock button fires
  // check that lock button can only fire when gate is open and unlocked

  // check if close button fires
  // check that close button can only fire when gate is open and unlocked
});

// tips
// - check which classes
// - check for disabled or enabled
// - check for default props
// - check when class is locked / unlocked that text rendered is correct
// - write 5-10 tests per component for MVP
