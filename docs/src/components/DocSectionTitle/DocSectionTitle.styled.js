import styled from 'styled-components'

export const Title = styled.h2`
  margin-top: 0;
  &:not(:first-child) {
    margin-top: ${({ theme }) => theme.spacing.large};
  }
  margin-bottom: ${({ theme }) => theme.spacing.small};

  font-size: ${({ theme }) => theme.fontSize.title3};
  line-height: ${({ theme }) => theme.lineHeight.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`
