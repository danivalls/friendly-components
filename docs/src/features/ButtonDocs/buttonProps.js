const props = [
  {
    name: 'type',
    description: 'Defines the appearance of the button.',
    type: '"default" | "outlined"',
    default: '"default"',
    required: false
  },
  {
    name: 'color',
    description: 'Defines the color of the button.',
    type: 'string',
    default: '"primary"',
    required: false
  },
  {
    name: 'onClick',
    description: 'Function to be called when the button is clicked.',
    type: 'function',
    required: false
  },
  {
    name: 'children',
    description: 'Content of the button.',
    type: 'node',
    required: false
  }
];

export default props;
