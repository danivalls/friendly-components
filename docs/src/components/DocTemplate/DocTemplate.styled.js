import styled from 'styled-components';

export const TemplateBody = styled.section`
  padding: ${({ theme }) => theme.spacing.base}
    ${({ theme }) => theme.spacing.small};
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 900px) {
    padding: ${({ theme }) => theme.spacing.large};
  }
`;
