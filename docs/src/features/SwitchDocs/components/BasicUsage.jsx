import { Switch } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const BasicUsage = () => {
  const [value, setValue] = useState(true);

  return (
    <Showcase>
      <Switch value={value} onChange={setValue} />
      <Switch value={value} onChange={setValue} color="secondary" />
      <Switch value={value} onChange={setValue} color="success" />
      <Switch value={value} onChange={setValue} color="warning" />
      <Switch value={value} onChange={setValue} color="error" />
    </Showcase>
  );
};

export default BasicUsage;

BasicUsage.code = `
import { Switch } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <Switch value={value} onChange={setValue} />
      <Switch value={value} onChange={setValue} color="secondary" />
      <Switch value={value} onChange={setValue} color="success" />
      <Switch value={value} onChange={setValue} color="warning" />
      <Switch value={value} onChange={setValue} color="error" />
    </div>
  );
};

export default BasicUsage;
`;
