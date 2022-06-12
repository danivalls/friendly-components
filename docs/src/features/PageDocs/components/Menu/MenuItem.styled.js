import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Layout = styled.div`
  position: relative;
  width: 100%;
  padding: ${({ theme: { spacing } }) => `${spacing.tiny} ${spacing.small}`};
  padding-left: ${({ theme: { spacing }, activeItem }) =>
    activeItem ? spacing.base : spacing.small};

  font-size: ${({ theme }) => theme.fontSize.regular};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease-out;

  &:hover {
    padding-left: ${({ theme }) => theme.spacing.base};

    span {
      left: -5px;
    }
  }
`;

export const Indicator = styled.span`
  position: absolute;
  top: 50%;
  left: ${({ activeItem }) => (activeItem ? '-5px' : '-10px')};
  transform: translateY(-50%);
  display: block;
  width: 0;
  border: 5px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.round};
  box-shadow: 0 0
    ${({ theme, activeItem }) => (activeItem ? theme.spacing.small : 0)} 0
    ${({ theme }) => theme.colors.primary};

  transition: 0.3s ease-out;
`;
