import styled from 'styled-components'

export const Container = styled.div`
  background-color: white;
  border-radius: ${({ theme }) => theme.borderRadius.base};
`

export const ComponentFrame = styled.div`
  padding: ${({ theme }) => theme.spacing.base};
`
