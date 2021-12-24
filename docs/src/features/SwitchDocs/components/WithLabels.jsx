import { Switch } from 'friendly-components';
import React, { useState } from 'react';

const WithLabels = () => {
  const [value, setValue] = useState(true);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexFlow: 'column',
        alignItems: 'center'
      }}
    >
      <Switch value={value} onChange={setValue} label="Label at right" />
      <Switch
        value={value}
        onChange={setValue}
        label="Label at left"
        labelPosition="left"
      />
    </div>
  );
};

export default WithLabels;

WithLabels.code = `
import { Switch } from 'friendly-components';
import React from 'react';

const WithLabels = () => {
  return (
    <div style={{ display: 'inline-flex', flexFlow: 'column' }}>
      <Switch value={value} onChange={setValue} label='Label at right' />
      <Switch value={value} onChange={setValue} label='Label at left' labelPosition='left' />
    </div>
  );
};

export default WithLabels;

`;
