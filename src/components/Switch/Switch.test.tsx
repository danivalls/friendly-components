import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Switch from '.';
import { render, screen, usedTheme } from '../../test-utils/customRender';

describe('Switch', () => {
  it('calls given onChange callback when clicked if not disabled', () => {
    const callback = jest.fn();
    const initialValue = true;
    render(<Switch value={initialValue} onChange={callback} />);

    const switchControl = screen.getByLabelText('switch');

    userEvent.click(switchControl);

    expect(callback).toHaveBeenCalledWith(!initialValue);
  });

  it('does not call given onChange callback when clicked if disabled', () => {
    const callback = jest.fn();
    const initialValue = true;
    render(<Switch value={initialValue} onChange={callback} disabled />);

    const switchControl = screen.getByLabelText('switch');

    userEvent.click(switchControl);

    expect(callback).not.toHaveBeenCalled();
  });

  it('renders given label text when provided', () => {
    const label = lorem.words(2);
    render(<Switch label={label} value={true} onChange={jest.fn()} />);

    const renderedLabel = screen.getByText(label);

    expect(renderedLabel).toBeInTheDocument();
  });

  it('renders a displaced indicator when value is true', () => {
    render(<Switch value={true} onChange={jest.fn()} />);

    const indicator = screen.getByLabelText('switch-indicator');

    expect(indicator).not.toHaveStyle('margin-left: 0');
  });

  it('renders a placed indicator when value is false', () => {
    render(<Switch value={false} onChange={jest.fn()} />);

    const indicator = screen.getByLabelText('switch-indicator');

    expect(indicator).toHaveStyle('margin-left: calc(100% - 100%);');
  });

  it('renders a gradient with provided color as background', () => {
    render(<Switch value={true} onChange={jest.fn()} />);

    const switchControl = screen.getByLabelText('switch');

    expect(switchControl).toHaveStyle(`background: radial-gradient(
      circle,
      ${usedTheme.colors.primary} 49.9%,
      ${usedTheme.colors.neutral} 50%
    );`);
  });

  it('renders an alternative gradient with provided color as background when keepColor prop is true', () => {
    render(<Switch value={true} onChange={jest.fn()} keepColor />);

    const switchControl = screen.getByLabelText('switch');

    expect(switchControl).toHaveStyle(`background: radial-gradient(
      circle,
      ${usedTheme.colors.primary} 49.9%,
      ${usedTheme.colors.primaryLighter} 50%
    );`);
  });

  it('renders an alternative gradient with provided custom color as background when keepColor prop is true', () => {
    render(
      <Switch
        value={true}
        onChange={jest.fn()}
        color="rebeccapurple"
        keepColor
      />
    );

    const switchControl = screen.getByLabelText('switch');

    expect(switchControl).toHaveStyle(`background: radial-gradient(
      circle,
      rebeccapurple 49.9%,
      rebeccapurple 50%
    );`);
  });

  it('renders a background-color with the provided color when keepColor prop is true and value is false', () => {
    render(
      <Switch value={false} onChange={jest.fn()} color="primary" keepColor />
    );
    const switchControl = screen.getByLabelText('switch');

    expect(switchControl).toHaveStyle(
      `background-color: ${usedTheme.colors.primaryLighter};`
    );
  });

  it('renders a background-color with the provided custom color when keepColor prop is true and value is false', () => {
    render(
      <Switch
        value={false}
        onChange={jest.fn()}
        color="rebeccapurple"
        keepColor
      />
    );
    const switchControl = screen.getByLabelText('switch');

    expect(switchControl).toHaveStyle('background-color: rebeccapurple;');
  });

  it('dims its opacity when its disabled', () => {
    render(<Switch value={false} onChange={jest.fn()} disabled />);
    const switchControl = screen.getByLabelText('switch');

    expect(switchControl).toHaveStyle('opacity: 0.5');
  });

  it('adds a margin-right when has a label and labelPosition is left', () => {
    const label = lorem.word();
    render(
      <Switch
        value={false}
        onChange={jest.fn()}
        label={label}
        labelPosition="left"
      />
    );

    const renderedLabel = screen.getByText(label);

    expect(renderedLabel).toHaveStyle(
      `margin-right: ${usedTheme.spacing.small}`
    );
  });
});
