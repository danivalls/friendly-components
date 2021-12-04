import styled from 'styled-components'

export const MenuItemsList = styled.div`
  display: flex;
  flex-flow: column;
`

export const CategoryHeader = styled.div`
  margin: ${({ theme }) => theme.spacing.small} 0
    ${({ theme }) => theme.spacing.tiny} ${({ theme }) => theme.spacing.small};

  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.textLight};
`
