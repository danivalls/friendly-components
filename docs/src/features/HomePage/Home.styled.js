import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HomeLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  z-index: 0;
  background-color: white;
  background-image: radial-gradient(
    circle 110vh at 47.1% 1.5%,
    white 60%,
    rgba(0, 0, 0, 0.25) 100%
  );
`

export const MainContent = styled.div`
  display: flex;
  flex-flow: column;
  color: ${({ theme }) => theme.colors.text};
  transition: 0.25s;
  padding: ${({ theme }) => theme.spacing.large};
  transform: scale(1);
  transition: 0.3s cubic-bezier(0.23, 1.05, 0.65, 1.44);
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.title3};
  line-height: ${({ theme }) => theme.lineHeight.title3};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeight.bold};

  @media only screen and (min-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.title1};
    line-height: ${({ theme }) => theme.lineHeight.title1};
  }
`

export const Subtitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  font-weight: ${({ theme }) => theme.fontWeight.light};

  @media only screen and (min-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.title2};
    line-height: ${({ theme }) => theme.lineHeight.title2};
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  margin-top: ${({ theme }) => theme.spacing.base};

  & > * {
    margin-right: ${({ theme }) => theme.spacing.small};
  }
`

export const GetStartedButton = styled(Link).attrs(() => ({
  to: '/docs'
}))`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 ${({ theme }) => theme.spacing.base};
  height: ${({ theme }) => theme.spacing.large};

  font-size: ${({ theme }) => theme.fontSize.regular};
  color: ${({ theme }) => theme.colors.neutral};
  text-decoration: none;

  outline: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.base};

  background-color: ${({ theme }) => theme.colors.secondary};

  cursor: pointer;
  transition: 0.3s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(calc(-${({ theme }) => theme.spacing.tiny} / 2));
  }
`
