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

    describe('conditional light display ', () => {
      it('if class is red-led, display red background', () => {
        const { getByText } = render(<Display closed={true} locked={true} />);

        const closedButton = getByText('Closed');
        const lockedButton = getByText('Locked');

        expect(closedButton.className).toEqual('led red-led');
        expect(lockedButton.className).toEqual('led red-led');
      });
      it('if class is green-led, display green background', () => {
        const { getByText } = render(<Display closed={false} locked={false} />);

        const openedButton = getByText('Open');
        const unlockedButton = getByText('Unlocked');

        expect(openedButton.className).toEqual('led green-led');
        expect(unlockedButton.className).toEqual('led green-led');
      });
    });
  });
});
