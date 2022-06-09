import { Icon, Table } from 'friendly-components';
import React from 'react';

const columns = [
  { label: 'Item', dataIndex: 'item' },
  { label: 'Price', dataIndex: 'price', align: 'right' },
  { label: 'Stock', dataIndex: 'stock', align: 'center', width: 100 },
  { label: 'Link', dataIndex: 'link', width: '10%' }
];

const dataSource = [
  {
    item: 'Item 1',
    price: <code>1€</code>,
    stock: <Icon color="green" name="Check" />,
    link: <a href="#1">Buy now</a>,
    key: '1'
  },
  {
    item: 'Item 2',
    price: <code>2€</code>,
    stock: <Icon color="green" name="Check" />,
    link: <a href="#2">Buy now</a>,
    key: '2'
  },
  {
    item: 'Item 3',
    price: <code>3€</code>,
    stock: <Icon color="red" name="Cancel" />,
    link: <a href="#3">Buy now</a>,
    key: '3'
  },
  {
    item: 'Item 4',
    price: <code>4€</code>,
    stock: <Icon color="green" name="Check" />,
    link: <a href="#4">Buy now</a>,
    key: '4'
  }
];

const ContentEnrichment = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};

export default ContentEnrichment;

export const contentEnrichmentCode = `
import { Icon, Table } from 'friendly-components';
import React from 'react';

const columns = [
  { label: 'Item', dataIndex: 'item' },
  { label: 'Price', dataIndex: 'price', align: 'right' },
  { label: 'Stock', dataIndex: 'stock', align: 'center', width: 100 },
  { label: 'Link', dataIndex: 'link', width: '10%' }
];

const dataSource = [
  {
    item: 'Item 1',
    price: <code>1€</code>,
    stock: <Icon color="green" name="Check" />,
    link: <a href="#1">Buy now</a>,
    key: '1'
  },
  {
    item: 'Item 2',
    price: <code>2€</code>,
    stock: <Icon color="green" name="Check" />,
    link: <a href="#2">Buy now</a>,
    key: '2'
  },
  {
    item: 'Item 3',
    price: <code>3€</code>,
    stock: <Icon color="red" name="Cancel" />,
    link: <a href="#3">Buy now</a>,
    key: '3'
  },
  {
    item: 'Item 4',
    price: <code>4€</code>,
    stock: <Icon color="green" name="Check" />,
    link: <a href="#4">Buy now</a>,
    key: '4'
  }
];

const ContentEnrichment = () => {
  return <Table columns={columns} dataSource={dataSource} />;
};
`;
