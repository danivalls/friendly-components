import React, { SyntheticEvent } from 'react';
import {
  ToggleBody,
  ToggleContainer,
  ToggleControl,
  ToggleIndicator
} from './Toggle.styled';
import { ToggleProps } from './Toggle.types';

const Toggle: React.FC<ToggleProps> = ({
  onChange,
  value,
  color = 'primary',
  disabled = false,
  keepColor = false
}) => {
  const handleToggleChange = (e: SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    onChange(target.checked);
  };
  return (
    <ToggleContainer disabled={disabled}>
      <ToggleControl
        checked={value}
        onChange={handleToggleChange}
        disabled={disabled}
      />
      <ToggleBody
        bgColor={color}
        checked={value}
        disabled={disabled}
        keepColor={keepColor}
      >
        <ToggleIndicator checked={value} />
      </ToggleBody>
    </ToggleContainer>
  );
};

export default Toggle;
