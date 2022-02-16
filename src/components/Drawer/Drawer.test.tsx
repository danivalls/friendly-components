import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Drawer from '.';
import { render, screen } from '../../test-utils/customRender';
import { Direction } from './types';

const renderDrawer = (
  visible = true,
  onClose = jest.fn(),
  placement?: Direction,
  content = lorem.paragraph()
): void => {
  render(
    <Drawer visible={visible} onClose={onClose} placement={placement}>
      {content}
    </Drawer>
  );
};

describe('Drawer', () => {
  it('renders an aside element', () => {
    renderDrawer();

    const aside = screen.getByRole('complementary');

    expect(aside).toBeVisible();
  });

  it('renders a mask when visible prop is true', () => {
    renderDrawer();

    const mask = screen.getByLabelText('mask');

    expect(mask).toBeVisible();
  });

  it('does not render a mask when visible prop is false', () => {
    renderDrawer(false);

    const mask = screen.getByLabelText('mask');

    expect(mask).not.toBeVisible();
  });

  it('renders aside element at right by default', () => {
    renderDrawer();

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('right: 0; left: unset');
  });

  it('renders aside element at right when direction value is right', () => {
    renderDrawer(undefined, undefined, 'right');

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('right: 0; left: unset');
  });

  it('renders aside element at right when direction value is left', () => {
    renderDrawer(undefined, undefined, 'left');

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('left: 0; right: unset');
  });

  it('renders aside element at bottom when direction value is bottom', () => {
    renderDrawer(undefined, undefined, 'bottom');

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('bottom: 0; top: unset');
  });

  it('renders aside element at top when direction value is top', () => {
    renderDrawer(undefined, undefined, 'top');

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('top: 0; bottom: unset');
  });

  it('calls onClose callback when mask is clicked', () => {
    const callback = jest.fn();
    renderDrawer(undefined, callback);

    const mask = screen.getByLabelText('mask');

    userEvent.click(mask);

    expect(callback).toHaveBeenCalled();
  });
});
