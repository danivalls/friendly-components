import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage from './components/BasicUsage';
import Positioning from './components/Positioning';

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
    </DocTemplate>
  );
};

export default DrawerDocs;
