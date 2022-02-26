import styled from 'styled-components';

export const IconsShowcase = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(128px, 1fr));
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.tiny};

  padding: ${({ theme }) => theme.spacing.base};

  border-radius: ${({ theme }) => theme.borderRadius.base};
  box-shadow: inset 0px 0px 0px 0px transparent;

  background-color: transparent;

  font-size: 12px;
  color: ${({ theme }) => theme.colors.textLight};

  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    box-shadow: inset 0px 0px 0px 1px ${({ theme }) => theme.colors.neutralDark};
    background-color: white;
    color: ${({ theme }) => theme.colors.text};
  }
`;
