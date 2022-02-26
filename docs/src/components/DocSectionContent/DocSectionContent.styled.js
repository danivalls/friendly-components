import styled from 'styled-components';

export const SectionContent = styled.span`
  a:link,
  a:visited,
  a:hover,
  a:active,
  a:focus {
    color: ${({ theme }) => theme.colors.primaryDarker};
    text-decoration: none;
  }
`;
