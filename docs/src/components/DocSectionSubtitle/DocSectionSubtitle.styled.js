import styled from 'styled-components'

export const Title = styled.h2`
  margin-bottom: ${({ theme }) => theme.spacing.tiny};

  font-size: ${({ theme }) => theme.fontSize.large};
  line-height: ${({ theme }) => theme.lineHeight.large};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.textLight};
`
