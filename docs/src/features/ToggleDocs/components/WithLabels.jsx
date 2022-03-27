import { Toggle } from 'friendly-components';
import React, { useState } from 'react';

const WithLabels = () => {
  const [valueLeft, setValueLeft] = useState(true);
  const [valueRight, setValueRight] = useState(true);

  return (
    <div
      style={{
        display: 'inline-flex',
        flexFlow: 'column',
        alignItems: 'center'
      }}
    >
      <Toggle
        value={valueLeft}
        onChange={setValueLeft}
        label="Label at right"
      />
      <Toggle
        value={valueRight}
        onChange={setValueRight}
        label="Label at left"
        labelPosition="left"
      />
    </div>
  );
};

export default WithLabels;

WithLabels.code = `
import { Toggle } from 'friendly-components';
import React, { useState } from 'react';

const WithLabels = () => {
  const [valueLeft, setValueLeft] = useState(true);
  const [valueRight, setValueRight] = useState(true);


  return (
    <div
      style={{
        display: 'inline-flex',
        flexFlow: 'column',
        alignItems: 'center'
      }}
    >
      <Toggle value={valueLeft} onChange={setValueLeft} label="Label at right" />
      <Toggle value={valueRight} onChange={setValueRight} label="Label at left" labelPosition="left" />
    </div>
  );
};
`;
