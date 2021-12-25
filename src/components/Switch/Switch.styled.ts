import styled from 'styled-components';

interface ContainerProps {
  labelPosition: string;
  disabled: boolean;
}
export const SwitchContainer = styled.label<ContainerProps>`
  display: inline-flex;
  align-items: center;
  flex-direction: ${({ labelPosition }): string =>
    labelPosition === 'left' ? 'row-reverse' : 'row'};

  cursor: ${({ disabled }): string => (disabled ? 'not-allowed' : 'pointer')};
  user-select: none;
  -webkit-tap-highlight-color: transparent;

  & > .switch-body {
    transform: scale(1);
    transition: all 0.3s cubic-bezier(0.44, 0.32, 0.37, 1.44);
  }

  &:active {
    & > .switch-body {
      transform: scale(0.9);
    }
  }

  & > .switch-label {
    margin-left: ${({ theme, labelPosition }): string =>
      labelPosition === 'right' ? theme.spacing.small : '0'};
    margin-right: ${({ theme, labelPosition }): string =>
      labelPosition === 'left' ? theme.spacing.small : '0'};
  }
`;

interface BodyProps {
  bgColor: string;
  checked: boolean;
  disabled: boolean;
  keepColor: boolean;
}
export const SwitchBody = styled.div.attrs(() => ({
  'aria-label': 'switch',
  className: 'switch-body'
}))<BodyProps>`
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

  transition: all 0.3s;
`;

interface IndicatorProps {
  checked: boolean;
}
export const SwitchIndicator = styled.div.attrs(() => ({
  'aria-label': 'switch-indicator'
}))<IndicatorProps>`
  width: ${({ theme }): string => theme.spacing.base};
  height: ${({ theme }): string => theme.spacing.base};
  background-color: white;
  border-radius: ${({ theme }): string => theme.borderRadius.round};
  margin-left: calc(
    100% -
      ${({ theme, checked }): string => (checked ? theme.spacing.base : '100%')}
  );
  transition: all 0.3s cubic-bezier(0.4, 0.4, 0.4, 1.5);
`;

export const LabelText = styled.span.attrs(() => ({
  'aria-label': 'switch-label',
  className: 'switch-label'
}))``;

export const SwitchControl = styled.input.attrs(() => ({
  type: 'checkbox'
}))`
  display: none;
`;
