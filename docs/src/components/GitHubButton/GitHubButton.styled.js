import styled from 'styled-components';
import GithubLogoSVG from './GitHubLogo.svg';

export const GHLink = styled.a`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;
  outline: 0;

  border-radius: ${({ theme }) => theme.borderRadius.base};

  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.text};

  height: ${({ theme }) => theme.spacing.large};
  width: ${({ theme }) => theme.spacing.large};

  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.text} 49.9%,
    #c9c9c9 50%
  );
  background-size: 100% 300%;
  background-position: 0% 0%;

  z-index: 0;

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-position: 0% 100%;
  }

  :after {
    content: '';
    position: absolute;
    border-radius: 10px;
    background-color: white;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    pointer-events: none;
  }

  & > * {
    z-index: 1;
    transition: 0.2s ease-out;
  }
`;

export const GHLogo = styled.img.attrs(() => ({
  src: GithubLogoSVG,
  alt: 'GitHub'
}))`
  width: 1.5rem;
  padding: 0.8rem;

  &:hover {
    padding: 0.7rem;
  }
`;
