const props = [
  {
    name: 'visible',
    description: 'Determines if the drawer is visible.',
    type: 'boolean',
    required: true
  },
  {
    name: 'onClose',
    description: 'Function to call when the drawer is closed.',
    type: 'function',
    required: true
  },
  {
    name: 'placement',
    description: 'The placement of the drawer.',
    type: '"left" | "right" | "top" | "bottom"',
    default: '"right"',
    required: false
  },
  {
    name: 'size',
    description: 'The size of the drawer.',
    type: 'string',
    default: '"378px"',
    required: false
  },
  {
    name: 'rounded',
    description: 'If true, the drawer corners will be rounded.',
    type: 'boolean',
    default: 'false',
    required: false
  },
  {
    name: 'mountNode',
    description: 'The node to mount the drawer to.',
    type: 'string | HTMLElement',
    default: 'document.body',
    required: false
  }
];

export default props;
