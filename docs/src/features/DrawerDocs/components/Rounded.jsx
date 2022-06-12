import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const Rounded = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const openDrawer = () => setDrawerVisibility(true);
  const closeDrawer = () => setDrawerVisibility(false);

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer
        onClose={closeDrawer}
        visible={drawerVisibility}
        rounded
        placement="bottom"
        size="25vh"
      >
        Perfect for mobile devices!
      </Drawer>
    </>
  );
};

export default Rounded;

export const roundedCode = `
import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const Rounded = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const openDrawer = () => setDrawerVisibility(true);
  const closeDrawer = () => setDrawerVisibility(false);

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer
        onClose={closeDrawer}
        visible={drawerVisibility}
        rounded
        placement="bottom"
        size="25vh"
      >
        Perfect for mobile devices!
      </Drawer>
    </>
  );
};

export default Rounded;
`;
