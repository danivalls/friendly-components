import styled from 'styled-components';

export const Container = styled.div`
  padding: ${({ theme }) => theme.spacing.base}
    ${({ theme }) => theme.spacing.small};
  background-color: ${({ theme }) => theme.colors.neutralDark}50;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutralDark};

  @media (min-width: 900px) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;

export const Title = styled.h1`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.title3};
  line-height: ${({ theme }) => theme.lineHeight.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.title1};
    line-height: ${({ theme }) => theme.lineHeight.title1};
  }
`;

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: 0;

  font-size: ${({ theme }) => theme.fontSize.regular};
  line-height: ${({ theme }) => theme.lineHeight.regular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.text};
`;
