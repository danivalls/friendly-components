import { Toggle } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const BasicUsage = () => {
  const [valuePrimary, setValuePrimary] = useState(true);
  const [valueSecondary, setValueSecondary] = useState(true);
  const [valueSuccess, setValueSuccess] = useState(true);
  const [valueWarning, setValueWarning] = useState(true);
  const [valueError, setValueError] = useState(true);

  return (
    <Showcase>
      <Toggle value={valuePrimary} onChange={setValuePrimary} />
      <Toggle
        value={valueSecondary}
        onChange={setValueSecondary}
        color="secondary"
      />
      <Toggle value={valueSuccess} onChange={setValueSuccess} color="success" />
      <Toggle value={valueWarning} onChange={setValueWarning} color="warning" />
      <Toggle value={valueError} onChange={setValueError} color="error" />
    </Showcase>
  );
};

export default BasicUsage;

BasicUsage.code = `
import { Toggle } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const BasicUsage = () => {
  const [valuePrimary, setValuePrimary] = useState(true);
  const [valueSecondary, setValueSecondary] = useState(true);
  const [valueSuccess, setValueSuccess] = useState(true);
  const [valueWarning, setValueWarning] = useState(true);
  const [valueError, setValueError] = useState(true);

  return (
    <Showcase>
      <Toggle value={valuePrimary} onChange={setValuePrimary} />
      <Toggle value={valueSecondary} onChange={setValueSecondary} color="secondary" />
      <Toggle value={valueSuccess} onChange={setValueSuccess} color="success" />
      <Toggle value={valueWarning} onChange={setValueWarning} color="warning" />
      <Toggle value={valueError} onChange={setValueError} color="error" />
    </Showcase>
  );
};
`;
