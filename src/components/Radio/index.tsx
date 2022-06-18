import React from 'react';
import { RadioGroup } from './Radio.styled';
import { RadioProps } from './Radio.types';
import RadioOption from './RadioOption';

const Radio: React.FC<RadioProps> = ({
  value,
  onChange,
  options,
  color = 'primary',
  className
}) => {
  return (
    <RadioGroup className={className}>
      {options.map((option) => (
        <RadioOption
          key={option.value}
          value={option.value}
          checked={option.value === value}
          label={option.label}
          onChange={onChange}
          color={color}
        />
      ))}
    </RadioGroup>
  );
};

export default Radio;
