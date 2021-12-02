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

export const BaseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.spacing.large};
  font-size: ${({ theme }) => theme.fontSize.title3};
  color: ${({ theme }) => theme.colors.neutral};
  outline: 0;
  border: 0;
  border-radius: ${({ theme }) => theme.borderRadius.base};
  cursor: pointer;
  transition: 0.3s;
`

export const GitHubButton = styled(BaseButton)`
  position: relative;
  width: ${({ theme }) => theme.spacing.large};
  color: ${({ theme }) => theme.colors.text};
  background: linear-gradient(
    0deg,
    ${({ theme }) => theme.colors.text} 49.9%,
    #c9c9c9 50%
  );
  background-size: 100% 300%;
  background-position: 0% 0%;
  z-index: 0;

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
  }
`

export const GetStartedButton = styled(BaseButton)`
  font-size: ${({ theme }) => theme.fontSize.regular};
  padding: ${({ theme }) => theme.spacing.base};
  background-color: ${({ theme }) => theme.colors.secondary};
  &:hover {
    background-color: ${({ theme }) => theme.colors.secondaryDark};
    transform: translateY(calc(-${({ theme }) => theme.spacing.tiny} / 2));
  }
`
