import { Toggle } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const CustomColor = () => {
  const [valueFirst, setValueFirst] = useState(true);
  const [valueSecond, setValueSecond] = useState(true);

  return (
    <Showcase>
      <Toggle
        value={valueFirst}
        onChange={setValueFirst}
        color="rebeccapurple"
      />
      <Toggle value={valueSecond} onChange={setValueSecond} color="#90105F" />
    </Showcase>
  );
};

export default CustomColor;

CustomColor.code = `
import { Toggle } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const CustomColor = () => {
  const [valueFirst, setValueFirst] = useState(true);
  const [valueSecond, setValueSecond] = useState(true);

  return (
    <Showcase>
      <Toggle value={valueFirst} onChange={setValueFirst} color="rebeccapurple" />
      <Toggle value={valueSecond} onChange={setValueSecond} color="#90105F" />
    </Showcase>
  );
};
`;
