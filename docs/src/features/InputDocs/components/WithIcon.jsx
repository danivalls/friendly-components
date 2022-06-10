import { Input } from 'friendly-components';
import React, { useState } from 'react';

const WithIcon = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ margin: 'auto', width: 200 }}>
      <Input
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        icon="User"
      />
    </div>
  );
};

export default WithIcon;

export const withIconCode = `
import { Input } from 'friendly-components';
import React, { useState } from 'react';

const WithIcon = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ margin: 'auto', width: 200 }}>
      <Input
        value={value}
        onChange={setValue}
        placeholder="Placeholder"
        icon="User"
      />
    </div>
  );
};
`;
