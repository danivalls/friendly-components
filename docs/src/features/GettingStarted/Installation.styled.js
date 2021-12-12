import styled from 'styled-components'

export const Paragraph = styled.p`
  &:first-child {
    margin-top: 0;
  }

  code {
    display: inline-block;
    font-size: ${({ theme }) => theme.fontSize.small};
    color: ${({ theme }) => theme.colors.primaryDark};
  }
`
