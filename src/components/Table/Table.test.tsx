import userEvent from '@testing-library/user-event';
import React from 'react';
import Table from '.';
import { render, screen, usedTheme } from '../../test-utils/customRender';
import { Column, Row } from './Table.types';

const COLUMNS: Column[] = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const DATA_SOURCE: Row[] = [
  { name: 'John Brown', age: 32, country: 'US', key: '1' }
];

describe('Table', () => {
  it('renders given columns', () => {
    render(<Table columns={COLUMNS} dataSource={DATA_SOURCE} />);

    const headers = screen.getAllByRole('columnheader');

    expect(headers).toHaveLength(COLUMNS.length);
  });

  it('renders given text for each column', () => {
    render(<Table columns={COLUMNS} dataSource={DATA_SOURCE} />);

    const firstHeader = screen.getByText(COLUMNS[0].label);

    expect(firstHeader).toBeInTheDocument();
  });

  it('renders given data for each row', () => {
    render(<Table columns={COLUMNS} dataSource={DATA_SOURCE} />);

    const firstRow = screen.getByText(DATA_SOURCE[0][COLUMNS[0].dataIndex]);

    expect(firstRow).toBeInTheDocument();
  });

  it('calls onRowClick when row is clicked', () => {
    const onRowClick = jest.fn();

    render(
      <Table
        columns={COLUMNS}
        dataSource={DATA_SOURCE}
        onRowClick={onRowClick}
      />
    );

    const firstRow = screen.getByText(DATA_SOURCE[0][COLUMNS[0].dataIndex]);

    userEvent.click(firstRow);

    expect(onRowClick).toHaveBeenCalledWith(DATA_SOURCE[0]);
  });

  it('renders different aesthetic when row is active', () => {
    const dataSource = [...DATA_SOURCE];
    dataSource[0].active = true;

    render(<Table columns={COLUMNS} dataSource={dataSource} />);

    const rows = screen.getAllByRole('row');
    const activeRowIndex = dataSource.findIndex((row) => row.active) + 1;

    expect(rows[activeRowIndex]).not.toHaveStyle(
      `background-color: transparent; color: ${usedTheme.colors.text}`
    );
  });

  it('applies correct column width when provided as number', () => {
    const columns = [...COLUMNS];
    columns[0].width = 100;

    render(<Table columns={columns} dataSource={DATA_SOURCE} />);

    const firstHeader = screen.getByText(COLUMNS[0].label);

    expect(firstHeader).toHaveStyle(`width: ${columns[0].width}px`);
  });

  it('applies correct column width when provided as string', () => {
    const columnWidth = '25%';
    const columns = [...COLUMNS];
    columns[0].width = columnWidth;

    render(<Table columns={columns} dataSource={DATA_SOURCE} />);

    const firstHeader = screen.getByText(COLUMNS[0].label);

    expect(firstHeader).toHaveStyle(`width: ${columnWidth}`);
  });
});
