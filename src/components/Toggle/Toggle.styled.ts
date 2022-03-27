import styled from 'styled-components';
import {
  ToggleBodyProps,
  ToggleContainerProps,
  ToggleIndicatorProps
} from './Toggle.types';

export const ToggleContainer = styled.label<ToggleContainerProps>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ labelPosition }): string =>
    labelPosition === 'left' ? 'row-reverse' : 'row'};

  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > .toggle-body {
    transform: scale(1);
    transition: all 0.5s cubic-bezier(0.44, 0.32, 0.37, 1.44);
  }

  &:active {
    & > .switch-body {
      transform: scale(0.9);
    }
  }

  & > .toggle-label {
    margin-left: ${({ theme, labelPosition }): string =>
      labelPosition === 'right' ? theme.spacing.small : '0'};
    margin-right: ${({ theme, labelPosition }): string =>
      labelPosition === 'left' ? theme.spacing.small : '0'};
  }
`;

export const ToggleBody = styled.div.attrs(() => ({
  'aria-label': 'toggle',
  className: 'toggle-body'
}))<ToggleBodyProps>`
  opacity: ${({ disabled }): number => (disabled ? 0.5 : 1)};

  display: inline-flex;
  align-items: center;
  padding: 0 calc(${({ theme }): string => theme.spacing.tiny} / 2);
  border-radius: ${({ theme }): string => theme.spacing.base};
  min-width: calc(${({ theme }): string => theme.spacing.base}*2);
  height: calc(
    ${({ theme }): string => theme.spacing.base} +
      ${({ theme }): string => theme.spacing.tiny}
  );

  background-color: ${({ theme, checked, bgColor, keepColor }): string =>
    checked
      ? theme.colors[bgColor] || bgColor
      : keepColor
      ? theme.colors[`${bgColor}Lighter`] || bgColor
      : theme.colors.neutral};
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
  'aria-label': 'toggle-indicator'
}))<ToggleIndicatorProps>`
  width: ${({ theme }): string => theme.spacing.base};
  height: ${({ theme }): string => theme.spacing.base};
  background-color: white;
  border-radius: ${({ theme }): string => theme.borderRadius.round};
  margin-left: calc(
    100% -
      ${({ theme, checked }): string => (checked ? theme.spacing.base : '100%')}
  );
  transition: all 0.5s cubic-bezier(0.4, 0.4, 0.4, 1.5);
`;

export const LabelText = styled.span.attrs(() => ({
  'aria-label': 'toggle-label',
  className: 'toggle-label'
}))``;

export const ToggleControl = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  display: none;
`;
