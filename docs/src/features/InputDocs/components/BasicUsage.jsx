import { Input } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ margin: 'auto', width: 200 }}>
      <Input value={value} onChange={setValue} placeholder="Placeholder" />
    </div>
  );
};

export default BasicUsage;

BasicUsage.code = `
import { Input } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [value, setValue] = useState('');

  return (
    <div style={{ margin: 'auto', width: 200 }}>
      <Input value={value} onChange={setValue} placeholder="Placeholder" />
    </div>
  );
};

export default BasicUsage;
`;
