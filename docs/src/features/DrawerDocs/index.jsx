import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage from './components/BasicUsage';
import CustomSize from './components/CustomSize';
import Positioning from './components/Positioning';
import Rounded from './components/Rounded';

const DrawerDocs = () => {
  return (
    <DocTemplate title="Drawer">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer title="Basic" code={BasicUsage.code}>
        <BasicUsage />
      </DocExampleRenderer>

      <DocExampleRenderer title="Positioning" code={Positioning.code}>
        <Positioning />
      </DocExampleRenderer>

      <DocExampleRenderer title="Rounded edges" code={Rounded.code}>
        <Rounded />
      </DocExampleRenderer>

      <DocExampleRenderer title="Custom size" code={CustomSize.code}>
        <CustomSize />
      </DocExampleRenderer>
    </DocTemplate>
  );
};

export default DrawerDocs;
