import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';
import { Showcase } from './Showcase';

const Positioning = () => {
  const [position, setPosition] = useState('right');
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const closeDrawer = () => setDrawerVisibility(false);
  const openDrawerInPosition = (pos) => {
    setPosition(pos);
    setTimeout(() => {
      setDrawerVisibility(true);
    }, 10);
  };

  return (
    <>
      <Showcase>
        <Button onClick={() => openDrawerInPosition('left')}>Left</Button>
        <Button onClick={() => openDrawerInPosition('right')}>Right</Button>
        <Button onClick={() => openDrawerInPosition('top')}>Top</Button>
        <Button onClick={() => openDrawerInPosition('bottom')}>Bottom</Button>
      </Showcase>

      <Drawer
        key={position}
        visible={drawerVisibility}
        onClose={closeDrawer}
        placement={position}
      >
        I'm at {position}
      </Drawer>
    </>
  );
};

export default Positioning;

Positioning.code = `
import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const Positioning = () => {
  const [position, setPosition] = useState('right');
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const closeDrawer = () => setDrawerVisibility(false);
  const openDrawerInPosition = (pos) => {
    setPosition(pos);
    setTimeout(() => {
      setDrawerVisibility(true);
    }, 10);
  };

  return (
    <>
      <div className='showcase'>
        <Button onClick={() => openDrawerInPosition('left')}>Left</Button>
        <Button onClick={() => openDrawerInPosition('right')}>Right</Button>
        <Button onClick={() => openDrawerInPosition('top')}>Top</Button>
        <Button onClick={() => openDrawerInPosition('bottom')}>Bottom</Button>
      </div>

      <Drawer
        key={position}
        visible={drawerVisibility}
        onClose={closeDrawer}
        placement={position}
      >
        I'm at {position}
      </Drawer>
    </>
  );
};

export default Positioning;
`;
