import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app

import Display from './Display';

describe('<Display />', () => {
  it('renders without failing', () => {
    render(<Display />);
  });

  describe('defaults', () => {
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
  describe('conditional display', () => {
    it('displays "Closed" if closed props is true', () => {
      const { getByText } = render(<Display closed={true} />);

      const display = getByText(/closed/i);

      expect(display.textContent).toBe('Closed');
    });

    it('displays "Open" if closed props is false', () => {
      const { getByText } = render(<Display closed={false} />);

      const display = getByText(/open/i);

      expect(display.textContent).toBe('Open');
    });

    it('displays "Locked" if locked props is true', () => {
      const { getByText } = render(<Display locked={true} />);

      const display = getByText(/locked/i);

      expect(display.textContent).toBe('Locked');
    });

    it('displays "Unlocked" if locked props is false', () => {
      const { getByText } = render(<Display locked={false} />);

      const display = getByText(/unlocked/i);

      expect(display.textContent).toBe('Unlocked');
    });

    // describe('"Open Gate" button changes open/close display to open', () => {});
    // describe('"Close Gate" button changes open/close display to closed', () => {});
    // describe('"Lock Gate" button changes lock/unlock display to locked', () => {});
    // describe('"Unlock Gate" button changes lock/unlock display to unlocked', () => {});
  });
});
