import { Toggle } from 'friendly-components';
import React, { useState } from 'react';

const Disable = () => {
  const [value, setValue] = useState(true);
  return (
    <Toggle
      value={value}
      onChange={setValue}
      label="This switch is disabled"
      disabled
    />
  );
};

export default Disable;

export const disableCode = `
import { Toggle } from 'friendly-components';
import React, { useState } from 'react';

const Disable = () => {
  const [value, setValue] = useState(true);
  
  return (
    <Toggle value={value} onChange={setValue} disabled />
  );
};

export default Disable;
`;
