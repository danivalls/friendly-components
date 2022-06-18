import { Radio } from 'friendly-components';
import React, { useState } from 'react';

const ColoringUsingCustomColor = () => {
  const [activeOption, setActiveOption] = useState();

  const options = [
    { value: 'custom-color-1', label: 'Option 1' },
    { value: 'custom-color-2', label: 'Option 2' },
    { value: 'custom-color-3', label: 'Option 3' }
  ];

  return (
    <>
      <Radio
        value={activeOption}
        onChange={setActiveOption}
        options={options}
        color="#c355d4"
      />
    </>
  );
};

export default ColoringUsingCustomColor;

export const coloringUsingCustomColorCode = `
import { Radio } from 'friendly-components';
import React, { useState } from 'react';

const Coloring = () => {
  const [activeOption, setActiveOption] = useState();

  const options = [
    { value: 'custom-color-1', label: 'Option 1' },
    { value: 'custom-color-2', label: 'Option 2' },
    { value: 'custom-color-3', label: 'Option 3' }
  ];

  return (
    <>
      <Radio
        value={activeOption}
        onChange={setActiveOption}
        options={options}
        color="#c355d4"
      />
    </>
  );
};
`;
