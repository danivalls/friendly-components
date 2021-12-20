import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Button from '.';
import {
  render,
  screen,
  usedTheme,
  waitFor
} from '../../test-utils/customRender';

describe('Button', () => {
  it('renders', () => {
    render(<Button />);

    const btn = screen.getByRole('button');

    expect(btn).toBeInTheDocument();
  });

  it('displays given children', () => {
    const content = lorem.words();
    render(<Button>{content}</Button>);

    const btn = screen.getByText(content);

    expect(btn).toBeInTheDocument();
  });

  it('calls given callback when clicked', () => {
    const callback = jest.fn();
    render(<Button onClick={callback} />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);

    expect(callback).toHaveBeenCalled();
  });

  it('adds a ripple when clicked', () => {
    render(<Button />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);
    const ripple = screen.getByLabelText('ripple');

    expect(ripple).toBeInTheDocument();
  });

  it('removes the ripple after being clicked', async () => {
    render(<Button />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);
    await waitFor(() => {
      const ripple = screen.queryByLabelText('ripple');

      expect(ripple).not.toBeInTheDocument();
    });
  });

  it('renders a white ripple by default when clicked', () => {
    render(<Button />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);
    const ripple = screen.getByLabelText('ripple');

    expect(ripple).toHaveStyle('background-color: white;');
  });

  it('renders a colored ripple when clicked and outlined type is provided', () => {
    render(<Button type="outlined" color="error" />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);
    const ripple = screen.getByLabelText('ripple');

    expect(ripple).toHaveStyle(`background-color: ${usedTheme.colors.error}`);
  });

  it('renders a primary-colored ripple when clicked, outlined type is provided but no color prop is provided', () => {
    render(<Button type="outlined" />);

    const btn = screen.getByRole('button');
    userEvent.click(btn);
    const ripple = screen.getByLabelText('ripple');

    expect(ripple).toHaveStyle(`background-color: ${usedTheme.colors.primary}`);
  });

  it('renders with given theme color', () => {
    render(<Button color="secondary" />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveStyle(`background-color: ${usedTheme.colors.secondary};`);
  });

  it('renders with custom color', () => {
    render(<Button color="rebeccapurple" />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveStyle('background-color: rebeccapurple;');
  });

  it('renders with primary color if color prop is not provided', () => {
    render(<Button />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveStyle(`background-color: ${usedTheme.colors.primary}`);
  });

  it('renders with outlined style if type outlined is provided', () => {
    render(<Button type="outlined" />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveStyle(
      `box-shadow: inset 0px 0px 0px 2px ${usedTheme.colors.primary}`
    );
  });

  it('applies given className', () => {
    const className = lorem.word();
    render(<Button className={className} />);

    const btn = screen.getByRole('button');

    expect(btn).toHaveClass(className);
  });
});
