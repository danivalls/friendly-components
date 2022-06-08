import { Table } from 'friendly-components';
import React, { useState } from 'react';

const columns = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const dataSource = [
  { name: 'John Brown', age: 32, country: 'US', key: '1' },
  { name: 'Jim Green', age: 42, country: 'UK', key: '2' },
  { name: 'Joe Black', age: 32, country: 'US', key: '3' },
  { name: 'Jim Red', age: 32, country: 'US', key: '4' }
];

const SelectableRows = () => {
  const [activeRow, setActiveRow] = useState(null);

  const handleRowClick = (row) => {
    setActiveRow((currentActiveRow) =>
      currentActiveRow === row.key ? null : row.key
    );
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource.map((row) => ({
        ...row,
        active: row.key === activeRow
      }))}
      onRowClick={handleRowClick}
    />
  );
};

export default SelectableRows;

SelectableRows.code = `
import { Table } from 'friendly-components';
import React, { useState } from 'react';

const columns = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const dataSource = [
  { name: 'John Brown', age: 32, country: 'US', key: '1' },
  { name: 'Jim Green', age: 42, country: 'UK', key: '2' },
  { name: 'Joe Black', age: 32, country: 'US', key: '3' },
  { name: 'Jim Red', age: 32, country: 'US', key: '4' }
];

const SelectableRows = () => {
  const [activeRow, setActiveRow] = useState(null);

  const handleRowClick = (row) => {
    setActiveRow((currentActiveRow) =>
      currentActiveRow === row.key ? null : row.key
    );
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource.map((row) => ({
        ...row,
        active: row.key === activeRow
      }))}
      onRowClick={handleRowClick}
    />
  );
};
`;
