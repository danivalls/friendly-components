import userEvent from '@testing-library/user-event';
import { lorem } from 'faker';
import React from 'react';
import Radio from '.';
import { render, screen, usedTheme } from '../../test-utils/customRender';
import { RadioOptionData } from './Radio.types';

const generateOptions = (amount: number): RadioOptionData[] =>
  new Array(amount).fill(null).map(
    (option, index): RadioOptionData => ({
      label: `${lorem.word()}-${index}`,
      value: index
    })
  );

describe('Radio', () => {
  it('Renders given options', () => {
    const optionsAmount = 5;
    const options = generateOptions(optionsAmount);

    render(
      <Radio value={options[0].value} onChange={jest.fn()} options={options} />
    );

    const radioInputs = screen.getAllByRole('radio');

    expect(radioInputs).toHaveLength(optionsAmount);
  });

  it('renders given label', () => {
    const options = generateOptions(1);

    render(
      <Radio value={options[0].value} onChange={jest.fn()} options={options} />
    );

    const label = screen.getByText(options[0].label);

    expect(label).toBeInTheDocument();
  });

  it('calls given setter callback with new value', () => {
    const options = generateOptions(2);
    const onChangeCallback = jest.fn();

    render(
      <Radio
        value={options[0].value}
        onChange={onChangeCallback}
        options={options}
      />
    );

    const secondOption = screen.getByText(options[1].label);
    userEvent.click(secondOption);

    expect(onChangeCallback).toHaveBeenCalledWith(options[1].value);
  });

  it('applies given color when it references one from the theme', () => {
    const colorFromTheme = 'secondary';
    const options = generateOptions(1);
    render(
      <Radio
        value={options[0].value}
        onChange={jest.fn()}
        options={options}
        color={colorFromTheme}
      />
    );

    const selectedRadio = screen.getByRole('radio');

    expect(selectedRadio).toHaveStyle(
      `background-color: ${usedTheme.colors[colorFromTheme]}`
    );
  });

  it('applies given color when it is a custom one', () => {
    const customColor = 'rebeccapurple';
    const options = generateOptions(1);
    render(
      <Radio
        value={options[0].value}
        onChange={jest.fn()}
        options={options}
        color={customColor}
      />
    );

    const selectedRadio = screen.getByRole('radio');

    expect(selectedRadio).toHaveStyle(`background-color: ${customColor}`);
  });

  it('does not apply active color to not selected options', () => {
    const options = generateOptions(2);
    render(
      <Radio value={options[0].value} onChange={jest.fn()} options={options} />
    );

    const radioInputs = screen.getAllByRole('radio');

    expect(radioInputs[1]).not.toHaveStyle(
      `background-color: ${usedTheme.colors.primary}`
    );
  });
});
