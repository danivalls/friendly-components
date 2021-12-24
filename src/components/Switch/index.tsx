import React, { SyntheticEvent } from 'react';
import {
  LabelText,
  SwitchBody,
  SwitchContainer,
  SwitchControl,
  SwitchIndicator
} from './Switch.styled';

interface Props {
  onChange: Function;
  value: boolean;
  color?: string;
  label?: string;
  labelPosition?: 'left' | 'right';
  disabled?: boolean;
  keepColor?: boolean;
}

const Switch: React.FC<Props> = ({
  onChange,
  value,
  color = 'primary',
  label,
  labelPosition = 'right',
  disabled = false,
  keepColor = false
}) => {
  const handleSwitchChange = (e: SyntheticEvent): void => {
    const target = e.target as HTMLInputElement;
    onChange(target.checked);
  };
  return (
    <SwitchContainer labelPosition={labelPosition} disabled={disabled}>
      <SwitchControl
        checked={value}
        onChange={handleSwitchChange}
        disabled={disabled}
      />
      <SwitchBody
        bgColor={color}
        checked={value}
        disabled={disabled}
        keepColor={keepColor}
      >
        <SwitchIndicator checked={value} />
      </SwitchBody>
      {!!label && <LabelText>{label}</LabelText>}
    </SwitchContainer>
  );
};

export default Switch;
