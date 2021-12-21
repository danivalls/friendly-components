import { Button } from 'friendly-components';
import React from 'react';
import { Showcase } from './Showcase';

const CustomColors = () => {
  return (
    <Showcase>
      <Button color="rebeccapurple">Click me</Button>
      <Button color="rebeccapurple" type="outlined">
        Click me
      </Button>
    </Showcase>
  );
};

export default CustomColors;

CustomColors.code = `
import { Button } from 'friendly-components';
import React from 'react';
import Showcase from './Showcase';

const CustomColors = () => {
  return (
    <div className="showcase" >
      <Button color="rebeccapurple">Click me</Button>
      <Button color="rebeccapurple" type="outlined">Click me</Button>
    </div>
  );
};

export default CustomColors;
`;
