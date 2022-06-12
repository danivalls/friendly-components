import styled, { DefaultTheme } from 'styled-components';
import {
  ToggleBodyProps,
  ToggleContainerProps,
  ToggleIndicatorProps
} from './Toggle.types';

export const ToggleContainer = styled.label<ToggleContainerProps>`
  display: inline-flex;

  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  -webkit-tap-highlight-color: transparent;
  opacity: 1;

  transition: all 0.3s;

  &:active {
    .toggle-indicator {
      width: 1.5rem;
    }
    input:checked + .toggle-body {
      .toggle-indicator {
        margin-left: calc(100% - 1.5rem - 0.25rem);
      }
    }
  }

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

const getBodyBgColor = (
  checked: boolean,
  keepColor: boolean,
  bgColor: string,
  theme: DefaultTheme
): string => {
  if (checked) return theme.colors[bgColor] ?? bgColor;
  if (keepColor) return theme.colors[`${bgColor}Lighter`] ?? bgColor;

  return theme.colors.neutral;
};

export const ToggleBody = styled.div.attrs(() => ({
  'aria-label': 'toggle',
  className: 'toggle-body'
}))<ToggleBodyProps>`
  display: inline-flex;
  align-items: center;

  width: 3rem;
  height: 1.75rem;

  border-radius: 1.75rem;
  opacity: ${({ disabled }): number => (disabled ? 0.5 : 1)};

  background-color: ${({ theme, checked, bgColor, keepColor }): string =>
    getBodyBgColor(checked, keepColor, bgColor, theme)};
  background: radial-gradient(
    circle,
    ${({ theme, bgColor }): string => theme.colors[bgColor] || bgColor} 49.9%,
    ${({ theme, bgColor, keepColor }): string =>
        keepColor
          ? theme.colors[`${bgColor}Lighter`] || bgColor
          : theme.colors.neutral}
      50%
  );
  background-size: 450% 100%;
  background-position: ${({ checked }): string => (checked ? '50%' : '100%')} 0%;

  transition: all 0.5s;
`;

export const ToggleIndicator = styled.div.attrs(() => ({
  'aria-label': 'toggle-indicator',
  className: 'toggle-indicator'
}))<ToggleIndicatorProps>`
  height: 1.25rem;
  width: 1.25rem;

  background-color: white;
  border-radius: 1.25rem;
  margin-left: ${({ checked }): string =>
    checked ? 'calc(100% - 1.25rem - 0.25rem)' : '0.25rem'};

  transition: all 0.3s cubic-bezier(0.4, 0.4, 0.4, 1.5);
`;

export const ToggleControl = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  display: none;
`;
