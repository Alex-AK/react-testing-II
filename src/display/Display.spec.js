import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app

import Display from './Display';

describe('<Display />', () => {
  it('renders without failing', () => {
    render(<Display />);
  });

  describe('display leds', () => {
    it('default display on lock/unlock led is "Unlocked"', () => {
      const { getByText } = render(<Display />);

      const display = getByText(/unlocked/i);

      expect(display.textContent).toBe('Unlocked');
    });
  });

  it('default display on open/close led is "Open"', () => {
    const { getByText } = render(<Display />);

    const display = getByText(/open/i);

    expect(display.textContent).toBe('Open');
  });

  // if we have a prop locked = true, it expects class ... target class name and verify
  // expect(close.disabled).toBe(false);
  // expect(lock.disabled).toBe(true);

  // describe('"Open Gate" button changes open/close display to open', () => {});
  // describe('"Close Gate" button changes open/close display to closed', () => {});
  // describe('"Lock Gate" button changes lock/unlock display to locked', () => {});
  // describe('"Unlock Gate" button changes lock/unlock display to unlocked', () => {});
});
