import { Table } from 'friendly-components';
import React from 'react';

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

const ClickableRows = () => {
  const handleRowClick = (row) => {
    alert(JSON.stringify(row, null, 2));
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      onRowClick={handleRowClick}
    />
  );
};

export default ClickableRows;

ClickableRows.code = `
import { Table } from 'friendly-components';
import React from 'react';

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

const ClickableRows = () => {
  const handleRowClick = (row) => {
    alert(JSON.stringify(row, null, 2));
  };

  return (
    <Table
      columns={columns}
      dataSource={dataSource}
      onRowClick={handleRowClick}
    />
  );
};
`;
