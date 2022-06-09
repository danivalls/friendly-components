import { Button } from 'friendly-components';
import React from 'react';
import { Showcase } from './Showcase';

const Outlined = () => {
  return (
    <Showcase>
      <Button type="outlined">Click me</Button>
      <Button type="outlined" color="secondary">
        Click me
      </Button>
      <Button type="outlined" color="success">
        Click me
      </Button>
      <Button type="outlined" color="warning">
        Click me
      </Button>
      <Button type="outlined" color="error">
        Click me
      </Button>
    </Showcase>
  );
};

export default Outlined;

export const outlinedCode = `
import { Button } from 'friendly-components';
import React from 'react';

const Outlined = () => {
  return (
    <div className="showcase" >
      <Button type="outlined">Click me</Button>
      <Button type="outlined" color="secondary">Click me</Button>
      <Button type="outlined" color="success">Click me</Button>
      <Button type="outlined" color="warning">Click me</Button>
      <Button type="outlined" color="error">Click me</Button>
    </div>
  );
};

export default Outlined;
`;
