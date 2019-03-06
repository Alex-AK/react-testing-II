import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app

import Controls from './Controls';

describe('<Controls />', () => {
  it('renders without failing', () => {
    render(<Controls />);
  });

  describe('buttons', () => {
    it('lock button renders with default set to disabled', () => {
      const { getByText } = render(<Controls />);

      const button = getByText(/lock gate/i);

      expect(button.textContent).toBe('Lock Gate');
      expect(button.disabled).toBeTruthy();
    });
  });

  describe('buttons', () => {
    it('close button renders with default set to enabled', () => {
      const { getByText } = render(<Controls />);

      const button = getByText(/close gate/i);

      expect(button.textContent).toBe('Close Gate');
      expect(button.disabled).toBeFalsy();
    });

    // check if lock button fires, display should change to unlocked
    describe('"Close Gate" button click fires function', () => {
      const mock = jest.fn();
      const { getByText } = render(<Controls toggleClosed={mock} />);

      const closeGate = getByText(/close gate/i);

      fireEvent.click(closeGate);
      expect(mock).toHaveBeenCalled();
    });

    describe('"Open Gate" button click fires function', () => {
      const mock = jest.fn();
      const { getByText } = render(<Controls toggleClosed={mock} />);

      const openGate = getByText(/open gate/i);

      fireEvent.click(openGate);
      expect(mock).toHaveBeenCalled();
    });
    // describe('"Lock Gate" button click fires function', () => {});
    // describe('"Unlock Gate" button click fires function', () => {});
  });
});
