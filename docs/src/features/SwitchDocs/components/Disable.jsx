import { Switch } from 'friendly-components';
import React, { useState } from 'react';

const Disable = () => {
  const [value, setValue] = useState(true);
  return (
    <Switch
      value={value}
      onChange={setValue}
      label="This switch is disabled"
      disabled
    />
  );
};

export default Disable;

Disable.code = `
import { Switch } from 'friendly-components';
import React, { useState } from 'react';

const Disable = () => {
  const [value, setValue] = useState(true);
  return (
    <Switch
      value={value}
      onChange={setValue}
      label="This switch is disabled"
      disabled
    />
  );
};

export default Disable;
`;
