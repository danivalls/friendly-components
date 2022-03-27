import { Switch } from 'friendly-components';
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
      <Switch value={valuePrimary} onChange={setValuePrimary} />
      <Switch
        value={valueSecondary}
        onChange={setValueSecondary}
        color="secondary"
      />
      <Switch value={valueSuccess} onChange={setValueSuccess} color="success" />
      <Switch value={valueWarning} onChange={setValueWarning} color="warning" />
      <Switch value={valueError} onChange={setValueError} color="error" />
    </Showcase>
  );
};

export default BasicUsage;

BasicUsage.code = `
import { Switch } from 'friendly-components';
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
      <Switch value={valuePrimary} onChange={setValuePrimary} />
      <Switch value={valueSecondary} onChange={setValueSecondary} color="secondary" />
      <Switch value={valueSuccess} onChange={setValueSuccess} color="success" />
      <Switch value={valueWarning} onChange={setValueWarning} color="warning" />
      <Switch value={valueError} onChange={setValueError} color="error" />
    </Showcase>
  );
};
`;
