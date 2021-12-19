import styled, { DefaultTheme } from 'styled-components';

const generatePadding = ({ theme }: { theme: DefaultTheme }): string => {
  const { small, tiny } = theme.spacing;

  return `${tiny} ${small}`;
};

const getColorFromTheme = (props: {
  theme: DefaultTheme;
  colorType: string;
}): string => {
  const { theme, colorType } = props;

  if (theme.colors[colorType]) return theme.colors[colorType];

  return colorType;
};

const generateBackgroundColor = (props: {
  theme: DefaultTheme;
  colorType: string;
  outlined: boolean;
}): string => {
  if (props.outlined) return 'transparent';
  return getColorFromTheme(props);
};

const generateTextColor = (props: {
  theme: DefaultTheme;
  colorType: string;
  outlined: boolean;
}): string => {
  if (props.outlined) return getColorFromTheme(props);

  return 'white';
};

const generateShadow = (props: {
  theme: DefaultTheme;
  colorType: string;
  outlined: boolean;
}): string => {
  if (props.outlined)
    return `inset 0px 0px 0px 2px ${getColorFromTheme(props)};`;

  return 'none';
};

export const BaseButton = styled.button`
  border: none;
  outline: none;
  padding: ${generatePadding};
  border-radius: ${({ theme }): string => theme.borderRadius.base};
  cursor: pointer;
  background-color: ${generateBackgroundColor};
  color: ${generateTextColor};
  box-shadow: ${generateShadow};
`;
