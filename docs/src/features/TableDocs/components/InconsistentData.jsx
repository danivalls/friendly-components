import { Table } from 'friendly-components';
import React from 'react';

const columns = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const dataSource = [
  { name: 'John Brown', age: 32, key: '1' },
  { name: 'Jim Green', country: 'UK', key: '2' },
  { name: 'Joe Black', age: 32, key: '3' },
  { name: 'Jim Red', age: 32, country: 'US', key: '4' }
];

const InconsistentData = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default InconsistentData;

export const inconsistentDataCode = `
import { Table } from 'friendly-components';
import React from 'react';

const columns = [
  { label: 'Name', dataIndex: 'name' },
  { label: 'Age', dataIndex: 'age' },
  { label: 'Country', dataIndex: 'country' }
];

const dataSource = [
  { name: 'John Brown', age: 32, key: '1' },
  { name: 'Jim Green', country: 'UK', key: '2' },
  { name: 'Joe Black', age: 32, key: '3' },
  { name: 'Jim Red', age: 32, country: 'US', key: '4' }
];

const InconsistentData = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};

`;
