import React from 'react';
import { BaseButton } from './Button.styled';

interface ButtonProps {
  color: string;
  outlined: boolean;
  children?: React.ReactNode;
  className: string;
}

const Button: React.FC<ButtonProps> = ({
  color,
  outlined,
  children,
  className
}) => {
  return (
    <BaseButton className={className} colorType={color} outlined={outlined}>
      {children}
    </BaseButton>
  );
};

export default Button;

Button.defaultProps = {
  color: 'primary',
  outlined: false,
  className: ''
};
