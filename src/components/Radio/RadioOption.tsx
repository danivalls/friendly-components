import React from 'react';
import {
  RadioIndicator,
  RadioInput,
  RadioOptionContainer
} from './Radio.styled';
import { RadioOptionProps } from './Radio.types';

const RadioOption: React.FC<RadioOptionProps> = ({
  value,
  label,
  checked,
  onChange,
  color
}) => {
  return (
    <RadioOptionContainer>
      <RadioInput
        checked={checked}
        value={value}
        name={String(value)}
        id={String(value)}
        onChange={(): void => onChange(value)}
      />
      <RadioIndicator checked={checked} color={color} />
      <label htmlFor={String(value)}>{label}</label>
    </RadioOptionContainer>
  );
};

export default RadioOption;
