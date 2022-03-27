import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Input from '.';
import {
  fireEvent,
  render,
  screen,
  usedTheme
} from '../../test-utils/customRender';

describe('Input', () => {
  it('renders given placeholder', () => {
    const placeholder = lorem.word();
    render(<Input value="" onChange={jest.fn()} placeholder={placeholder} />);

    const inputWithPlaceholder = screen.getByPlaceholderText(placeholder);

    expect(inputWithPlaceholder).toBeInTheDocument();
  });

  it('renders given label', () => {
    const label = lorem.word();
    render(<Input value="" onChange={jest.fn()} label={label} />);

    const inputWithLabel = screen.getByText(label);

    expect(inputWithLabel).toBeInTheDocument();
  });

  it('renders an input field with given type', () => {
    const placeholder = lorem.word();

    render(
      <Input
        value=""
        onChange={jest.fn()}
        placeholder={placeholder}
        type="password"
      />
    );

    const inputField = screen.getByPlaceholderText(placeholder);

    expect(inputField).toHaveAttribute('type', 'password');
  });

  it('renders given text', () => {
    const text = lorem.word();
    render(<Input value={text} onChange={jest.fn()} />);

    const textInInput = screen.getByDisplayValue(text);

    expect(textInInput).toBeInTheDocument();
  });

  it('renders given icon', () => {
    render(<Input value="" onChange={jest.fn()} icon="Activity" />);

    const icon = screen.getByLabelText('ActivityIcon');

    expect(icon).toBeInTheDocument();
  });

  it('renders calls given callback with typed value', () => {
    const callback = jest.fn();
    const placeholder = lorem.word();
    const text = lorem.word(1);
    render(<Input value="" onChange={callback} placeholder={placeholder} />);

    const input = screen.getByPlaceholderText(placeholder);

    userEvent.type(input, text);
    fireEvent.blur(input);

    expect(callback).toHaveBeenCalledWith(text);
  });

  it('changes its icon appearance when focused', () => {
    const placeholder = lorem.word();
    render(
      <Input
        value=""
        onChange={jest.fn()}
        icon="Activity"
        placeholder={placeholder}
      />
    );

    const iconContainer = screen.getByLabelText('icon-container');
    const input = screen.getByPlaceholderText(placeholder);

    userEvent.click(input);

    expect(iconContainer).toHaveStyle(
      `background-color: ${usedTheme.colors.neutralLighter}`
    );
    expect(iconContainer).not.toHaveStyle(
      'box-shadow: 0 0 0 0 transparent; transform: translate(0, 0)'
    );
  });

  it('changes its label position when has an icon and its focused', () => {
    const placeholder = lorem.word();
    const labelText = lorem.word();
    render(
      <Input
        value=""
        onChange={jest.fn()}
        label={labelText}
        icon="Activity"
        placeholder={placeholder}
      />
    );

    const label = screen.getByText(labelText);
    const input = screen.getByPlaceholderText(placeholder);

    userEvent.click(input);

    expect(label).toHaveStyle(`padding-left: ${usedTheme.spacing.medium}`);
  });
});
