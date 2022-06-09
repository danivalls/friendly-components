import { Input } from 'friendly-components';
import React, { useState } from 'react';

const WithLabel = () => {
  const [value, setValue] = useState('');

  return (
    <div
      style={{
        margin: 'auto',
        width: 200,
        display: 'flex',
        flexFlow: 'column',
        gap: 16
      }}
    >
      <Input
        value={value}
        onChange={setValue}
        label="Label"
        placeholder="Placeholder"
      />
      <Input
        icon="Search"
        value={value}
        onChange={setValue}
        label="Label"
        placeholder="Placeholder"
      />
    </div>
  );
};

export default WithLabel;

export const withLabelCode = `
import { Input } from 'friendly-components';
import React, { useState } from 'react';

const WithLabel = () => {
  const [value, setValue] = useState('');

  return (
    <div
      style={{ margin: 'auto', width: 200, display: 'flex', flexFlow: 'column', gap: 16 }} >
      <Input value={value} onChange={setValue} label="Label" placeholder="Placeholder" />
      <Input icon="Search" value={value} onChange={setValue} label="Label" placeholder="Placeholder" />
    </div>
  );
};
`;
