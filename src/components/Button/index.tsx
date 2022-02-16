import React, { useCallback, useEffect, useRef, useState } from 'react';
import { BaseButton, Ripple } from './Button.styled';
import { RippleElement } from './types';

interface ButtonProps {
  color?: string;
  type?: 'default' | 'outlined';
  children?: React.ReactNode | string;
  className?: string;
  onClick?: Function;
}

const RIPPLE_DURATION = 500;

const Button: React.FC<ButtonProps> = ({
  color = 'primary',
  type = 'default',
  onClick,
  className = '',
  children
}) => {
  const [ripples, setRipples] = useState<RippleElement[]>([]);
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return (): void => {
      mounted.current = false;
    };
  }, []);

  const handleClick = useCallback((e: React.MouseEvent): void => {
    const { clientX, clientY } = e;
    const target = e.target as HTMLElement;
    const { left, top } = target.getBoundingClientRect();

    const x = clientX - left;
    const y = clientY - top;

    onClick?.();

    const ripple = { x, y, key: Date.now() };

    const clearRipple = (): void => {
      if (mounted.current) {
        setRipples((state) => state.filter((element) => element != ripple));
      }
    };

    setRipples((state) => [...state, ripple]);
    setTimeout(clearRipple, RIPPLE_DURATION);
  }, []);

  return (
    <BaseButton
      onClick={handleClick}
      className={className}
      colorType={color}
      styleType={type}
    >
      {children}
      {ripples.map(({ x, y, key }) => (
        <Ripple
          x={x}
          y={y}
          key={key}
          duration={RIPPLE_DURATION}
          colored={type !== 'default'}
          colorType={color}
        />
      ))}
    </BaseButton>
  );
};

export default Button;
