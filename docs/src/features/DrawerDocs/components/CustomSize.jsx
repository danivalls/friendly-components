import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const CustomSize = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const openDrawer = () => setDrawerVisibility(true);
  const closeDrawer = () => setDrawerVisibility(false);

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer onClose={closeDrawer} visible={drawerVisibility} size="150px">
        Nice content!
      </Drawer>
    </>
  );
};

export default CustomSize;

CustomSize.code = `
import { Button, Drawer } from 'friendly-components';
import React, { useState } from 'react';

const CustomSize = () => {
  const [drawerVisibility, setDrawerVisibility] = useState(false);

  const openDrawer = () => setDrawerVisibility(true);
  const closeDrawer = () => setDrawerVisibility(false);

  return (
    <>
      <Button onClick={openDrawer}>Open Drawer</Button>
      <Drawer onClose={closeDrawer} visible={drawerVisibility} size="150px">
        Nice content!
      </Drawer>
    </>
  );
};

export default CustomSize;
`;
