import styled from 'styled-components';
import {
  IconContainerProps,
  InputContainerProps,
  InputLabelProps
} from './Input.types';

export const InputContainer = styled.label<InputContainerProps>`
  display: grid;
  grid-template-areas: 'prepend input append';
  grid-template-columns: min-content 1fr;
  grid-gap: ${({ theme, hasIcon }): string =>
    hasIcon ? '0' : theme.spacing.small};
  align-items: center;

  height: calc(${({ theme }): string => theme.spacing.medium} + 6px);
  cursor: text;

  background-color: ${({ theme }): string => theme.colors.neutralLight};
  border-radius: ${({ theme }): string => theme.borderRadius.base};
`;

export const InputBody = styled.input`
  grid-area: input;

  background-color: transparent;
  outline: none;
  border: none;
  padding-left: 0;

  -webkit-user-select: text;

  opacity: 0.8;

  transition: all 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);

  &::placeholder {
    opacity: 0.5;
    transition: all 0.3s;
  }

  &:focus {
    padding-left: ${({ theme }): string => theme.spacing.tiny};

    &::placeholder {
      opacity: 0;
    }
  }
`;

export const IconContainer = styled.div.attrs(() => ({
  'aria-label': 'icon-container'
}))<IconContainerProps>`
  grid-area: prepend;

  display: flex;
  align-items: center;
  justify-content: center;

  height: calc(${({ theme }): string => theme.spacing.medium} + 6px);
  width: calc(${({ theme }): string => theme.spacing.medium} + 6px);

  border-radius: ${({ theme }): string => theme.borderRadius.base};
  background-color: ${({ theme, elevated }): string =>
    elevated ? theme.colors.neutralLighter : theme.colors.neutralLight};
  box-shadow: ${({ elevated }): string =>
    elevated
      ? '10px 10px 20px 0px rgba(0,0,0,0.075), 10px 10px 10px -10px rgba(0,0,0,0.128)'
      : '0 0 0 0 transparent'};

  transform: translate(
    ${({ elevated }): string => (elevated ? '-25%, -25%' : '0, 0')}
  );

  transition: all 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);
`;

export const InputLabel = styled.div<InputLabelProps>`
  font-size: ${({ theme }): string => theme.fontSize.small};
  padding-left: ${({ theme, hasIcon, focused }): string =>
    hasIcon && focused ? theme.spacing.medium : theme.spacing.small};

  transition: all 0.3s cubic-bezier(0.47, 1.64, 0.41, 0.8);
`;
