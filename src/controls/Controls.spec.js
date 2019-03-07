import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'; // cleans up after all tests across app

import Controls from './Controls';

const mock = jest.fn();

describe('<Controls />', () => {
  it('renders without failing', () => {
    render(<Controls />);
  });

  describe('button text', () => {
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
    it('"Close Gate" button click fires function', () => {
      const { getByText } = render(<Controls toggleClosed={mock} />);

      const closeGate = getByText(/close gate/i);

      fireEvent.click(closeGate);
      expect(mock).toHaveBeenCalled();
    });

    it('"Open Gate" button click fires function', () => {
      const { getByText } = render(
        <Controls toggleClosed={mock} closed={true} />
      );

      const openGate = getByText(/open gate/i);

      fireEvent.click(openGate);
      expect(mock).toHaveBeenCalled();
    });

    it('"Lock Gate" button click fires function', () => {
      const { getByText } = render(
        <Controls toggleLocked={mock} closed={true} />
      );

      const lockGate = getByText(/lock gate/i);

      fireEvent.click(lockGate);
      expect(mock).toHaveBeenCalled();
    });

    it('"Unlock Gate" button click fires function', () => {
      const { getByText } = render(
        <Controls toggleLocked={mock} closed={true} locked={true} />
      );

      const unlockGate = getByText(/unlock gate/i);

      fireEvent.click(unlockGate);
      expect(mock).toHaveBeenCalled();
    });

    // still working on this one.
    it.skip('Cannot open gate if it is locked', () => {
      const { getByText } = render(
        <Controls toggleLocked={mock} closed={true} locked={true} />
      );

      const button = getByText(/open gate/i);

      expect(button.disabled).toBeTruthy();
      // why does this button fire if it's disabled?
      fireEvent.click(button);
      expect(mock).toHaveBeenCalled();
    });

    // it('"Lock Gate" button cannot fire function when gate is open', () => {
    //   const { getByText } = render(<Controls closed={true} />);

    //   const lockGate = getByText(/lock gate/i);

    //   fireEvent.click(lockGate);
    //   expect(mock).not.toHaveBeenCalled();
    // });

    // it('"Open Gate" button click does not fire function if gate is locked', () => {
    //   const { getByText } = render(
    //     <Controls toggleLocked={mock} closed={true} locked={true} />
    //   );

    //   const unlockGate = getByText(/unlock gate/i);

    //   fireEvent.click(unlockGate);
    //   expect(mock).toHaveBeenCalled();
    // });
  });
});
