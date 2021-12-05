import styled from 'styled-components'

export const Title = styled.h2`
  margin-top: ${({ theme }) => theme.spacing.base};
  margin-bottom: ${({ theme }) => theme.spacing.small};

  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
