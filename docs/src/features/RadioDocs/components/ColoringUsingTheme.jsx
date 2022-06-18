import { Radio } from 'friendly-components';
import React, { useState } from 'react';

const ColoringUsingTheme = () => {
  const [activeOption, setActiveOption] = useState();

  const options = [
    { value: 'theme-color-1', label: 'Option 1' },
    { value: 'theme-color-2', label: 'Option 2' },
    { value: 'theme-color-3', label: 'Option 3' }
  ];

  return (
    <>
      <Radio
        value={activeOption}
        onChange={setActiveOption}
        options={options}
        color="success"
      />
    </>
  );
};

export default ColoringUsingTheme;

export const coloringUsingThemeCode = `
import { Radio } from 'friendly-components';
import React, { useState } from 'react';

const Coloring = () => {
  const [activeOption, setActiveOption] = useState();

  const options = [
    { value: 'theme-color-1', label: 'Option 1' },
    { value: 'theme-color-2', label: 'Option 2' },
    { value: 'theme-color-3', label: 'Option 3' }
  ];

  return (
    <>
      <Radio
        value={activeOption}
        onChange={setActiveOption}
        options={options}
        color="success"
      />
    </>
  );
};
`;
