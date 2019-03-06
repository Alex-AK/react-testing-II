import React from 'react';
import { render, fireEvent } from 'react-testing-library';

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
});
