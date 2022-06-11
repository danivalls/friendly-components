const props = [
  {
    name: 'value',
    description: 'The value of the input.',
    type: 'string',
    required: true
  },
  {
    name: 'onChange',
    description: 'The function to call when the value changes.',
    type: 'function',
    required: true
  },
  {
    name: 'placeholder',
    description: 'The placeholder text.',
    type: 'string',
    required: false
  },
  {
    name: 'label',
    description: 'The label text.',
    type: 'string',
    required: false
  },
  {
    name: 'icon',
    description: 'Add an icon to the input.',
    type: 'string',
    required: false
  },
  {
    name: 'type',
    description: 'The type of input.',
    type: '"text" | "password" | "number" | "date" | "time" | "month" | "week"',
    default: '"text"',
    required: false
  }
];

export default props;
