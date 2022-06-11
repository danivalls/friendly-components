import styled from 'styled-components';

export const Container = styled.section`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;
