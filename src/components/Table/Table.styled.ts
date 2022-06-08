import styled, { DefaultTheme } from 'styled-components';
import tinycolor from 'tinycolor2';
import { CellProps, TableRowProps } from './Table.types';

export const StyledTable = styled.table`
  width: 100%;
  border-spacing: 0;
  font-size: 0.8rem;
`;

export const TableHead = styled.thead`
  outline: none;
  color: ${({ theme }): string => theme.colors.text};

  th:first-of-type {
    border-top-left-radius: ${({ theme }): string => theme.borderRadius.base};
  }

  th:last-of-type {
    border-top-right-radius: ${({ theme }): string => theme.borderRadius.base};
  }
`;

export const TableRow = styled.tr`
  outline: none;
  padding: ${({ theme }): string => theme.spacing.micro};
  border-radius: 0;
`;

const getColumnWidth = ({ width }: CellProps): string => {
  if (typeof width === 'number') return `${width}px`;
  if (typeof width === 'string') return width;
  return 'unset';
};

export const TableHeaderCell = styled.th<CellProps>`
  outline: none;
  background-color: ${({ theme }): string => theme.colors.neutral};
  text-align: ${({ align }): string => align};
  font-weight: Bold;
  width: ${getColumnWidth};

  padding: 0.625rem 0.75rem;
`;

export const TableBody = styled.tbody`
  outline: none;
`;

const getActiveRowColor = (theme: DefaultTheme): string => {
  const { primaryDark } = theme.colors;

  return tinycolor(primaryDark).setAlpha(0.1).toString();
};

export const TableBodyRow = styled(TableRow)<TableRowProps>`
  cursor: ${({ clickable }): string => (clickable ? 'pointer' : 'default')};

  background-color: ${({ theme, active }): string =>
    active ? getActiveRowColor(theme) : 'transparent'};

  color: ${({ theme, active }): string =>
    active ? theme.colors.primaryDark : theme.colors.text};

  &:hover {
    background-color: ${({ theme, active }): string =>
      active ? getActiveRowColor(theme) : theme.colors.neutralLighter};
  }

  &:last-of-type {
    td:first-of-type {
      border-bottom-left-radius: ${({ theme }): string =>
        theme.borderRadius.base};
    }
    td:last-of-type {
      border-bottom-right-radius: ${({ theme }): string =>
        theme.borderRadius.base};
    }
  }
`;

export const TableBodyCell = styled.td<CellProps>`
  text-align: ${({ align }): string => align};
  padding: 0.625rem 0.75rem;

  border-bottom: 1px solid ${({ theme }): string => theme.colors.neutral};
  &:first-of-type {
    border-left: 1px solid ${({ theme }): string => theme.colors.neutral};
  }
  &:last-of-type {
    border-right: 1px solid ${({ theme }): string => theme.colors.neutral};
  }
`;
