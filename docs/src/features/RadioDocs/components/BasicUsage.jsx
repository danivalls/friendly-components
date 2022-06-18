import { Radio } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [activeOption, setActiveOption] = useState();

  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' }
  ];

  return (
    <Radio value={activeOption} onChange={setActiveOption} options={options} />
  );
};

export default BasicUsage;

export const basicUsageCode = `
import { Radio } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [activeOption, setActiveOption] = useState();

  const options = [
    { value: 1, label: 'Option 1' },
    { value: 2, label: 'Option 2' },
    { value: 3, label: 'Option 3' }
  ];

  return (
    <Radio value={activeOption} onChange={setActiveOption} options={options} />
  );
};
`;
