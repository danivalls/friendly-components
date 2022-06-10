import { Button } from 'friendly-components';
import React from 'react';
import { Showcase } from './Showcase';

const BasicUsage = () => {
  return (
    <Showcase>
      <Button>Click me</Button>
      <Button color="secondary">Click me</Button>
      <Button color="success">Click me</Button>
      <Button color="warning">Click me</Button>
      <Button color="error">Click me</Button>
    </Showcase>
  );
};

export default BasicUsage;

export const basicUsageCode = `
import { Button } from 'friendly-components';
import React from 'react';

const BasicUsage = () => {
  return (
    <div className='showcase' >
      <Button>Click me</Button>
      <Button color="secondary">Click me</Button>
      <Button color="success">Click me</Button>
      <Button color="warning">Click me</Button>
      <Button color="error">Click me</Button>
    </div>
  );
};

export default BasicUsage;
`;
