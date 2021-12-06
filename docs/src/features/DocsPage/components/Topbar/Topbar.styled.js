import { Link } from 'react-router-dom'
import styled from 'styled-components'

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
`

export const Title = styled(Link).attrs(() => ({
  to: '/'
}))`
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};

  @media (min-width: 900px) {
    font-size: ${({ theme }) => theme.fontSize.title3};
  }
`

export const Extras = styled.div`
  display: none;
  @media (min-width: 900px) {
    display: grid;
    grid-gap: ${({ theme }) => theme.spacing.base};
  }
`
