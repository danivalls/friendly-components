import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Drawer from '.';
import { render, screen, usedTheme } from '../../test-utils/customRender';
import { DrawerProps } from './Drawer.types';

interface RenderArgs extends Partial<DrawerProps> {
  content?: string;
}

const renderDrawer = ({
  visible = true,
  onClose = jest.fn(),
  content = lorem.paragraph(),
  rounded,
  placement
}: RenderArgs = {}): void => {
  render(
    <Drawer
      visible={visible}
      onClose={onClose}
      placement={placement}
      rounded={rounded}
    >
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
    renderDrawer({ visible: false });

    const mask = screen.getByLabelText('mask');

    expect(mask).not.toBeVisible();
  });

  it('renders aside element at right by default', () => {
    renderDrawer();

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('right: 0; left: unset');
  });

  it('renders aside element at right when direction value is right', () => {
    renderDrawer({ placement: 'right' });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('right: 0; left: unset');
  });

  it('renders aside element at right when direction value is left', () => {
    renderDrawer({ placement: 'left' });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('left: 0; right: unset');
  });

  it('renders aside element at bottom when direction value is bottom', () => {
    renderDrawer({ placement: 'bottom' });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('bottom: 0; top: unset');
  });

  it('renders aside element at top when direction value is top', () => {
    renderDrawer({ placement: 'top' });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('top: 0; bottom: unset');
  });

  it('calls onClose callback when mask is clicked', () => {
    const callback = jest.fn();
    renderDrawer({ onClose: callback });

    const mask = screen.getByLabelText('mask');

    userEvent.click(mask);

    expect(callback).toHaveBeenCalled();
  });

  it('has rounded borders on its opposite side when rounded prop is true and position is left or right', () => {
    renderDrawer({ rounded: true, placement: 'right' });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle(
      `border-top-left-radius: ${usedTheme.borderRadius.large};
      border-bottom-left-radius: ${usedTheme.borderRadius.large}`
    );
  });

  it('has rounded borders on its opposite side when rounded prop is true and position is top or bottom', () => {
    renderDrawer({ rounded: true, placement: 'bottom' });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle(
      `border-top-left-radius: ${usedTheme.borderRadius.large};
      border-top-right-radius: ${usedTheme.borderRadius.large}`
    );
  });

  it('does not have rounded borders by default', () => {
    renderDrawer();

    const aside = screen.getByRole('complementary');

    expect(aside).not.toHaveStyle(
      `border-top-left-radius: ${usedTheme.borderRadius.large}`
    );
    expect(aside).not.toHaveStyle(
      `border-top-left-radius: ${usedTheme.borderRadius.large}`
    );
  });

  it('moves the drawer body in the correct direction when placement is right', () => {
    renderDrawer({ placement: 'right', visible: false });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('transform: translateX(100%);');
  });

  it('moves the drawer body in the correct direction when placement is left', () => {
    renderDrawer({ placement: 'left', visible: false });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('transform: translateX(-100%);');
  });

  it('moves the drawer body in the correct direction when placement is top', () => {
    renderDrawer({ placement: 'top', visible: false });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('transform: translateY(-100%);');
  });

  it('moves the drawer body in the correct direction when placement is bottom', () => {
    renderDrawer({ placement: 'bottom', visible: false });

    const aside = screen.getByRole('complementary');

    expect(aside).toHaveStyle('transform: translateY(100%);');
  });
});
