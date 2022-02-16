import styled from 'styled-components';

export const Showcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  grid-gap: ${({ theme }) => theme.spacing.small};
`;
