import { Switch } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const CustomColor = () => {
  const [value, setValue] = useState(true);

  return (
    <Showcase>
      <Switch value={value} onChange={setValue} color="rebeccapurple" />
      <Switch value={value} onChange={setValue} color="#90105F" />
    </Showcase>
  );
};

export default CustomColor;

CustomColor.code = `
import { Switch } from 'friendly-components';
import React, { useState } from 'react';

const CustomColor = () => {
  const [value, setValue] = useState(true);

  return (
    <div>
      <Switch value={value} onChange={setValue} color="rebeccapurple" />
      <Switch value={value} onChange={setValue} color="#90105F" />
    </div>
  );
};

export default CustomColor;
`;
