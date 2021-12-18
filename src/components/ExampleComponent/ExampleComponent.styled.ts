import styled, { DefaultTheme } from 'styled-components';

const generateGradient = ({
  theme,
  color
}: {
  theme: DefaultTheme;
  color: string;
}): string => {
  const main = theme.colors[color];
  const dark = theme.colors[`${color}Dark`];

  return `linear-gradient(180deg, ${main} 49.9%, ${dark} 50%);`;
};

export const Container = styled.div`
  display: flex;
  gap: ${({ theme }): string => theme.spacing.small};
  align-items: center;
`;

export const ColorPalette = styled.div`
  display: flex;
  overflow: hidden;
  border-radius: ${({ theme }): string => theme.borderRadius.large};
`;

export const ColorCard = styled.div`
  background-color: ${({ theme, color }): string => theme.colors[color]};
  background: ${generateGradient};
  width: ${({ theme }): string => theme.spacing.large};
  aspect-ratio: 1 / 1;
`;
