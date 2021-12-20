import styled from 'styled-components';

export const DocsLayout = styled.div`
  display: grid;
  grid-template-areas: 'topbar' 'content';
  grid-template-rows: min-content auto;

  height: 100vh;

  @media (min-width: 900px) {
    grid-template-areas: 'topbar topbar' 'menu content';
    grid-template-columns: min-content auto;
  }
`;

export const Content = styled.main`
  grid-area: content;
  background-color: ${({ theme }) => theme.colors.neutral};
  overflow: auto;

  @media (min-width: 900px) {
    border: 1px solid ${({ theme }) => theme.colors.neutralDark};
    border-top-left-radius: ${({ theme }) => theme.borderRadius.large};
  }
`;
