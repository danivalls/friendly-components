const props = [
  {
    name: 'columns',
    description: 'The columns to display in the table.',
    type: 'Column[]',
    required: true
  },
  {
    name: 'dataSource',
    description: 'The data to display in the table.',
    type: 'Row[]',
    required: true
  },
  {
    name: 'onRowClick',
    description: 'The function to call when a row is clicked.',
    type: 'function',
    required: false
  }
];

export const columnTypeData = [
  {
    name: 'label',
    description: 'The text to be displayed in the column header.',
    type: 'string',
    required: true
  },
  {
    name: 'dataIndex',
    description:
      'The name of the property in the dataSource object to display in the column.',
    type: 'string',
    required: true
  },
  {
    name: 'width',
    description: 'The width of the column.',
    type: 'string | number',
    required: false
  },
  {
    name: 'align',
    description: 'The alignment of the column.',
    type: '"left" | "center" | "right"',
    default: '"left"',
    required: false
  }
];

export const rowTypeData = [
  {
    name: 'key',
    description: 'The key of the row. Must be unique.',
    type: 'string',
    required: true
  },
  {
    name: 'active',
    description: 'Whether the row is active.',
    type: 'boolean',
    default: 'false',
    required: false
  },
  {
    name: '[key: string]',
    description:
      'Any data to be added to the row. Usually will match the dataIndex of each column.',
    type: 'any',
    required: false
  }
];

export default props;
