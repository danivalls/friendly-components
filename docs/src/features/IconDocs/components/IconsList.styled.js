import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.base};

  @media (min-width: 900px) {
    grid-template-columns: 2fr 1fr;
  }

  background-color: white;
  padding: ${({ theme }) => theme.spacing.large};

  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  border-radius: ${({ theme }) => theme.borderRadius.base};

  margin-bottom: ${({ theme }) => theme.spacing.base};
`;

export const FilterResultsText = styled.span`
  display: flex;
  align-items: center;

  font-style: italic;
  font-size: ${({ theme }) => theme.fontSize.small};
  color: ${({ theme }) => theme.colors.neutralDarker};
`;

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
