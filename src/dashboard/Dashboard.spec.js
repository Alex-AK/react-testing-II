import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('renders without failing', () => {
    render(<Dashboard />);
  });

  // check if lock button fires, display should change to unlocked
  describe('"Close Gate" button click fires function', () => {
    const { getByText } = render(<Dashboard />);
    const mock = jest.fn(() => 'hello');

    const openButton = getByText(/close gate/i);

    fireEvent.click(openButton);
    expect(mock).toHaveBeenCalled();
  });
  // describe('"Open Gate" button click fires function', () => {});
  // describe('"Lock Gate" button click fires function', () => {});
  // describe('"Unlock Gate" button click fires function', () => {});

  // describe('"Open Gate" button changes open/close display to open', () => {});
  // describe('"Close Gate" button changes open/close display to closed', () => {});
  // describe('"Lock Gate" button changes lock/unlock display to locked', () => {});
  // describe('"Unlock Gate" button changes lock/unlock display to unlocked', () => {});
});

// tips
// - check which classes
// - check for disabled or enabled
// - check for default props
// - check when class is locked / unlocked that text rendered is correct
// - write 5-10 tests per component for MVP
