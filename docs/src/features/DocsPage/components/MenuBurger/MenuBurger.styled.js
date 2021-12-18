import styled from 'styled-components';

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
    transition: transform 0.2s ease-out, opacity 0.2s;
    transition-delay: 0.1s;

    background-color: ${({ active, theme }) =>
      active ? 'white' : theme.colors.text};

    &:nth-child(2) {
      opacity: ${({ active }) => (active ? 0 : 1)};
    }

    &:first-child {
      transform: rotate(${({ active }) => (active ? '-45deg' : 0)})
        translate(${({ active }) => (active ? '-7px, 3px' : 0)});
    }

    &:last-child {
      transform: rotate(${({ active }) => (active ? '45deg' : 0)})
        translate(${({ active }) => (active ? '-8px, -4px' : 0)});
    }
  }
`;
export const Line = styled.span`
  height: 3px;
  border-radius: ${({ theme }) => theme.spacing.tiny};
`;
