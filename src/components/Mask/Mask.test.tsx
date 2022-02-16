import React from 'react';
import Mask from '.';
import { render, screen } from '../../test-utils/customRender';

describe('Mask', () => {
  it('renders given custom color', () => {
    render(<Mask visible onClick={jest.fn()} color="rebeccapurple" />);

    const mask = screen.getByLabelText('mask');

    expect(mask).toHaveStyle('background-color: rebeccapurple');
  });

  it('renders black color by default', () => {
    render(<Mask visible onClick={jest.fn()} />);

    const mask = screen.getByLabelText('mask');

    expect(mask).toHaveStyle('background-color: black');
  });
});
