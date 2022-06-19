import styled, { DefaultTheme } from 'styled-components';
import { RadioIndicatorProps } from './Radio.types';

export const RadioGroup = styled.div.attrs(() => ({
  role: 'radiogroup'
}))`
  display: flex;
  flex-flow: column;
  gap: 0.5rem;
`;

export const RadioOptionContainer = styled.label`
  display: grid;
  grid-template-columns: min-content 1fr;
  grid-gap: 0.5rem;
  align-items: center;
`;

const getIndicatorColor = (
  theme: DefaultTheme,
  checked: boolean,
  color: string
): string => {
  if (!checked) return theme.colors.neutral;

  return theme.colors[color] || color;
};

export const RadioIndicator = styled.span.attrs(() => ({
  role: 'radio'
}))<RadioIndicatorProps>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 1.25rem;
  height: 1.25rem;
  border-radius: ${({ theme }): string => theme.borderRadius.round};

  background-color: ${({ theme, color, checked }): string =>
    getIndicatorColor(theme, checked, color)};

  transition: all 0.3s;

  :after {
    content: '';
    display: block;
    width: ${({ checked }): string => (checked ? '0.5rem' : '1rem')};
    height: ${({ checked }): string => (checked ? '0.5rem' : '1rem')};

    border-radius: ${({ theme }): string => theme.borderRadius.round};

    background: white;

    transition: all 0.3s
      ${({ theme }): string => theme.animationTimings.softBounceBig};
  }
`;

export const RadioInput = styled.input.attrs(() => ({
  type: 'radio'
}))`
  display: none;
`;

export const RadioLabel = styled.label`
  white-space: nowrap;
  width: min-content;
  cursor: pointer;

  font-family: ${({ theme }): string => theme.fontFamily};
`;
