import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Toggle from '.';
import { render, screen, usedTheme } from '../../test-utils/customRender';

describe('Toggle', () => {
  it('calls given onChange callback when clicked if not disabled', () => {
    const callback = jest.fn();
    const initialValue = true;
    render(<Toggle value={initialValue} onChange={callback} />);

    const toggleControl = screen.getByLabelText('toggle');

    userEvent.click(toggleControl);

    expect(callback).toHaveBeenCalledWith(!initialValue);
  });

  it('does not call given onChange callback when clicked if disabled', () => {
    const callback = jest.fn();
    const initialValue = true;
    render(<Toggle value={initialValue} onChange={callback} disabled />);

    const toggleControl = screen.getByLabelText('toggle');

    userEvent.click(toggleControl);

    expect(callback).not.toHaveBeenCalled();
  });

  it('renders given label text when provided', () => {
    const label = lorem.words(2);
    render(<Toggle label={label} value={true} onChange={jest.fn()} />);

    const renderedLabel = screen.getByText(label);

    expect(renderedLabel).toBeInTheDocument();
  });

  it('renders a displaced indicator when value is true', () => {
    render(<Toggle value={true} onChange={jest.fn()} />);

    const indicator = screen.getByLabelText('toggle-indicator');

    expect(indicator).not.toHaveStyle('margin-left: 0');
  });

  it('renders a placed indicator when value is false', () => {
    render(<Toggle value={false} onChange={jest.fn()} />);

    const indicator = screen.getByLabelText('toggle-indicator');

    expect(indicator).toHaveStyle('margin-left: calc(100% - 100%);');
  });

  it('renders a gradient with provided color as background', () => {
    render(<Toggle value={true} onChange={jest.fn()} />);

    const toggleControl = screen.getByLabelText('toggle');

    expect(toggleControl).toHaveStyle(`background: radial-gradient(
      circle,
      ${usedTheme.colors.primary} 49.9%,
      ${usedTheme.colors.neutral} 50%
    );`);
  });

  it('renders an alternative gradient with provided color as background when keepColor prop is true', () => {
    render(<Toggle value={true} onChange={jest.fn()} keepColor />);

    const toggleControl = screen.getByLabelText('toggle');

    expect(toggleControl).toHaveStyle(`background: radial-gradient(
      circle,
      ${usedTheme.colors.primary} 49.9%,
      ${usedTheme.colors.primaryLighter} 50%
    );`);
  });

  it('renders an alternative gradient with provided custom color as background when keepColor prop is true', () => {
    render(
      <Toggle
        value={true}
        onChange={jest.fn()}
        color="rebeccapurple"
        keepColor
      />
    );

    const toggleControl = screen.getByLabelText('toggle');

    expect(toggleControl).toHaveStyle(`background: radial-gradient(
      circle,
      rebeccapurple 49.9%,
      rebeccapurple 50%
    );`);
  });

  it('renders a background-color with the provided color when keepColor prop is true and value is false', () => {
    render(
      <Toggle value={false} onChange={jest.fn()} color="primary" keepColor />
    );
    const toggleControl = screen.getByLabelText('toggle');

    expect(toggleControl).toHaveStyle(
      `background-color: ${usedTheme.colors.primaryLighter};`
    );
  });

  it('renders a background-color with the provided custom color when keepColor prop is true and value is false', () => {
    render(
      <Toggle
        value={false}
        onChange={jest.fn()}
        color="rebeccapurple"
        keepColor
      />
    );
    const toggleControl = screen.getByLabelText('toggle');

    expect(toggleControl).toHaveStyle('background-color: rebeccapurple;');
  });

  it('dims its opacity when its disabled', () => {
    render(<Toggle value={false} onChange={jest.fn()} disabled />);
    const toggleControl = screen.getByLabelText('toggle');

    expect(toggleControl).toHaveStyle('opacity: 0.5');
  });

  it('adds a margin-right when has a label and labelPosition is left', () => {
    const label = lorem.word();
    render(
      <Toggle
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
