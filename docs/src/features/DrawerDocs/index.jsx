import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import PropsTable from 'components/PropsTable';
import React from 'react';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import CustomSize, { customSizeCode } from './components/CustomSize';
import Positioning, { positioningCode } from './components/Positioning';
import Rounded, { roundedCode } from './components/Rounded';
import props from './drawerProps';

const DrawerDocs = () => {
  return (
    <DocTemplate title="Drawer">
      <DocSectionTitle>Usage</DocSectionTitle>

      <DocExampleRenderer
        title="Basic Usage"
        code={basicUsageCode}
        content={<BasicUsage />}
      />

      <DocExampleRenderer
        title="Positioning"
        code={positioningCode}
        content={<Positioning />}
      />

      <DocExampleRenderer
        title="Rounded edges"
        code={roundedCode}
        content={<Rounded />}
      />

      <DocExampleRenderer
        title="Custom size"
        code={customSizeCode}
        content={<CustomSize />}
      />

      <DocSectionTitle>API</DocSectionTitle>
      <PropsTable title="Props" props={props} />
    </DocTemplate>
  );
};

export default DrawerDocs;
