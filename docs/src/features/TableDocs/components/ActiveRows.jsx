import { Table } from 'friendly-components';
import React from 'react';

const columns = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const dataSource = [
  { name: 'John Brown', age: 32, country: 'US', key: '1' },
  { name: 'Jim Green', age: 42, country: 'UK', key: '2', active: true },
  { name: 'Joe Black', age: 32, country: 'US', key: '3' },
  { name: 'Jim Red', age: 32, country: 'US', key: '4' }
];

const ActiveRows = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default ActiveRows;

export const activeRowsCode = `
import { Table } from 'friendly-components';
import React from 'react';

const columns = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const dataSource = [
  { name: 'John Brown', age: 32, country: 'US', key: '1' },
  { name: 'Jim Green', age: 42, country: 'UK', key: '2', active: true },
  { name: 'Joe Black', age: 32, country: 'US', key: '3' },
  { name: 'Jim Red', age: 32, country: 'US', key: '4' }
];

const ActiveRows = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};
`;
