import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.neutralDark}30;
  padding: ${({ theme }) => theme.spacing.large};
`

export const Title = styled.h1`
  margin: 0;

  font-size: ${({ theme }) => theme.fontSize.title3};
  line-height: ${({ theme }) => theme.lineHeight.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.text};
`

export const Description = styled.p`
  margin-top: ${({ theme }) => theme.spacing.small};
  margin-bottom: 0;

  font-size: ${({ theme }) => theme.fontSize.regular};
  line-height: ${({ theme }) => theme.lineHeight.regular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.text};
`
