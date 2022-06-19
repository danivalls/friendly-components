import styled, { DefaultTheme, keyframes } from 'styled-components';
import { BaseButtonProps, RippleProps } from './Button.types';

const getColorFromTheme = (props: {
  theme: DefaultTheme;
  colorType: string;
}): string => {
  const { theme, colorType } = props;

  return theme.colors[colorType] || colorType;
};

const getBackgroundColor = (props: {
  theme: DefaultTheme;
  colorType: string;
  styleType: string;
}): string => {
  return props.styleType === 'outlined'
    ? 'transparent'
    : getColorFromTheme(props);
};

const getTextColor = (props: {
  theme: DefaultTheme;
  colorType: string;
  styleType: string;
}): string => {
  return props.styleType === 'outlined' ? getColorFromTheme(props) : 'white';
};

const getOutlineShadow = (props: {
  theme: DefaultTheme;
  colorType: string;
  styleType: string;
}): string => {
  return props.styleType === 'outlined'
    ? `inset 0px 0px 0px 2px ${getColorFromTheme(props)};`
    : 'none';
};

export const BaseButton = styled.button<BaseButtonProps>`
  position: relative;

  padding: 0.5rem 0.75rem;

  outline: none;
  overflow: hidden;
  border: none;
  border-radius: ${({ theme }): string => theme.borderRadius.base};

  cursor: pointer;

  background-color: ${getBackgroundColor};
  box-shadow: ${getOutlineShadow};

  color: ${getTextColor};
  font-family: ${({ theme }): string => theme.fontFamily};
`;

const rippleAnimation = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1);
  }

  100% {
    opacity: 0;
    transform: scale(10);
  }
`;

export const Ripple = styled.div.attrs(() => ({
  'aria-label': 'ripple'
}))<RippleProps>`
  position: absolute;
  top: ${({ y }): number => y}px;
  left: ${({ x }): number => x}px;
  background-color: ${({ theme, colored, colorType }): string =>
    colored ? getColorFromTheme({ theme, colorType }) : 'white'};
  border-radius: 100%;
  pointer-events: none;
  aspect-ratio: 1 / 1;
  width: 10px;
  animation: ${rippleAnimation};
  animation-duration: ${({ duration }): number => duration}ms;
  animation-fill-mode: forwards;
`;
