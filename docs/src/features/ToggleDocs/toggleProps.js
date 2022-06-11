const props = [
  {
    name: 'value',
    description: 'Whether the toggle is on.',
    type: 'boolean',
    required: true
  },
  {
    name: 'onChange',
    description:
      'The function to call when the value changes. Will receive the new value as an argument.',
    type: 'function',
    required: true
  },
  {
    name: 'color',
    description: 'The color of the toggle.',
    type: 'string',
    default: '"primary"',
    required: false
  },
  {
    name: 'disabled',
    description: 'Whether the toggle is disabled.',
    type: 'boolean',
    default: 'false',
    required: false
  }
];

export default props;
