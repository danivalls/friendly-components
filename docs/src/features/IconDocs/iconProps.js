const props = [
  {
    name: 'name',
    description: 'The name of the icon.',
    type: 'string',
    required: true
  },
  {
    name: 'size',
    description: 'The size of the icon.',
    type: 'string',
    default: '"1em"',
    required: false
  },
  {
    name: 'color',
    description: 'The color of the icon.',
    type: 'string',
    required: false
  }
];

export default props;
