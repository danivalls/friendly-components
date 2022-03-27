import React, { ChangeEventHandler, useCallback, useState } from 'react';
import Icon from '../Icon';
import {
  IconContainer,
  InputBody,
  InputContainer,
  InputLabel
} from './Input.styled';
import { InputProps } from './Input.types';

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  placeholder,
  label,
  type = 'text',
  icon
}) => {
  const [focused, setFocused] = useState(false);

  const handleInputValue: ChangeEventHandler<HTMLInputElement> = useCallback(
    ({ target }) => onChange(target.value),
    [onChange]
  );

  return (
    <label>
      {!!label && (
        <InputLabel hasIcon={!!icon} focused={focused}>
          {label}
        </InputLabel>
      )}
      <InputContainer hasIcon={!!icon}>
        {!!icon && (
          <IconContainer elevated={focused}>
            <Icon name={icon} />
          </IconContainer>
        )}
        <InputBody
          value={value}
          onChange={handleInputValue}
          placeholder={placeholder}
          type={type}
          onFocus={(): void => setFocused(true)}
          onBlur={(): void => setFocused(false)}
        />
      </InputContainer>
    </label>
  );
};

export default Input;
