import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${({ theme }) => theme.spacing.xLarge};
  grid-area: topbar;
  padding: 0 ${({ theme }) => theme.spacing.small};

  @media (min-width: 900px) {
    justify-content: space-between;
  }
`;

export const FCLogo = styled.img.attrs(() => ({
  src: '/friendly-components/fc-logo.svg',
  alt: 'FriendlyComponents Logo'
}))`
  width: 2.5rem;
  margin-right: ${({ theme }) => theme.spacing.small};
`;

export const Title = styled(Link).attrs(() => ({
  to: '/'
}))`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.title3};
  }
`;

export const Extras = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: grid;
    grid-gap: ${({ theme }) => theme.spacing.base};
  }
`;
