import { Icon } from 'friendly-components';
import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.textLight};
`;

export const RequiredPropIcon = styled(Icon).attrs(({ theme, required }) => ({
  name: required ? 'Check' : 'Cancel',
  color: required ? theme.colors.success : theme.colors.error,
  size: theme.fontSize.large
}))``;

export const Code = styled.code`
  background-color: ${({ theme }) => theme.colors.neutralLight};
`;
