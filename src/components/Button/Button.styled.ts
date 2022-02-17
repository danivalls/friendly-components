import styled, { DefaultTheme, keyframes } from 'styled-components';
import { BaseButtonProps, RippleProps } from './Button.types';

const generatePadding = ({ theme }: { theme: DefaultTheme }): string => {
  const { small, tiny } = theme.spacing;

  return `${tiny} ${small}`;
};

const getColorFromTheme = (props: {
  theme: DefaultTheme;
  colorType: string;
}): string => {
  const { theme, colorType } = props;

  if (colorType && theme.colors[colorType]) return theme.colors[colorType];

  return colorType;
};

const generateBackgroundColor = (props: {
  theme: DefaultTheme;
  colorType: string;
  styleType: string;
}): string => {
  if (props.styleType === 'outlined') return 'transparent';
  return getColorFromTheme(props);
};

const generateTextColor = (props: {
  theme: DefaultTheme;
  colorType: string;
  styleType: string;
}): string => {
  if (props.styleType === 'outlined') return getColorFromTheme(props);

  return 'white';
};

const generateOutlineShadow = (props: {
  theme: DefaultTheme;
  colorType: string;
  styleType: string;
}): string => {
  if (props.styleType === 'outlined')
    return `inset 0px 0px 0px 2px ${getColorFromTheme(props)};`;

  return 'none';
};

export const BaseButton = styled.button<BaseButtonProps>`
  border: none;
  position: relative;
  overflow: hidden;
  outline: none;
  padding: ${generatePadding};
  border-radius: ${({ theme }): string => theme.borderRadius.base};
  cursor: pointer;
  background-color: ${generateBackgroundColor};
  color: ${generateTextColor};
  box-shadow: ${generateOutlineShadow};
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
