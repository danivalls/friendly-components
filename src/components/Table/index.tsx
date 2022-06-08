import React from 'react';
import {
  StyledTable,
  TableBody,
  TableBodyCell,
  TableBodyRow,
  TableHead,
  TableHeaderCell,
  TableRow
} from './Table.styled';
import { TableProps } from './Table.types';

const Table: React.FC<TableProps> = ({
  columns,
  dataSource,
  onRowClick,
  className
}) => {
  return (
    <StyledTable className={className}>
      <TableHead>
        <TableRow>
          {columns.map(({ label, dataIndex, align, width }) => (
            <TableHeaderCell
              key={dataIndex}
              align={align || 'left'}
              width={width}
            >
              {label}
            </TableHeaderCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {dataSource.map((row) => (
          <TableBodyRow
            key={row.key}
            clickable={!!onRowClick}
            onClick={(): void => onRowClick?.(row)}
            active={row.active}
          >
            {columns.map(({ dataIndex, align }) => (
              <TableBodyCell key={dataIndex} align={align || 'left'}>
                {row[dataIndex]}
              </TableBodyCell>
            ))}
          </TableBodyRow>
        ))}
      </TableBody>
    </StyledTable>
  );
};

export default Table;
