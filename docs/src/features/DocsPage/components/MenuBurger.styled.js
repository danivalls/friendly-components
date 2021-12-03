import styled from 'styled-components'

export const Container = styled.button`
  background-color: transparent;
  border: none;
  outline: none;

  display: grid;
  width: 40px;
  grid-template-rows: repeat(3px);
  grid-gap: 5px;
  cursor: pointer;

  & > span {
    background-color: ${({ active, theme }) =>
      active ? 'white' : theme.colors.text};
  }
`
export const Line = styled.span`
  height: 3px;
  border-radius: ${({ theme }) => theme.spacing.tiny};
`
