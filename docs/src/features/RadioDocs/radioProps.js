const props = [
  {
    name: 'value',
    description: 'The value of the input option.',
    type: 'string | number',
    required: true
  },
  {
    name: 'onChange',
    description: 'The function to call when the value changes.',
    type: 'function',
    required: true
  },
  {
    name: 'options',
    description: 'The options to display in the radio group.',
    type: 'RadioOptionData[]',
    required: true
  },
  {
    name: 'color',
    description: 'The color of the active radio indicator.',
    type: 'string',
    required: false,
    default: '"primary"'
  }
];

export const radioOptionData = [
  {
    name: 'label',
    description: 'The label text.',
    type: 'string',
    required: true
  },
  {
    name: 'value',
    description: 'The value of the input option.',
    type: 'string | number'
  }
];

export default props;
