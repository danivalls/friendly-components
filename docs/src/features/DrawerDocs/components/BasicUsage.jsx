import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const openDrawer = () => setDrawerVisibility(true);
  const closeDrawer = () => setDrawerVisibility(false);

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer onClose={closeDrawer} visible={drawerVisibility}>
        Nice content!
      </Drawer>
    </>
  );
};

export default BasicUsage;

export const basicUsageCode = `
import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const BasicUsage = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const openDrawer = () => setDrawerVisibility(true);
  const closeDrawer = () => setDrawerVisibility(false);

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer onClose={closeDrawer} visible={drawerVisibility}>
        Nice content!
      </Drawer>
    </>
  );
};

export default BasicUsage;
`;
