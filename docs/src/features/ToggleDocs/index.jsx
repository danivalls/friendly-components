import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import CustomColor, { customColorCode } from './components/CustomColor';
import Disable, { disableCode } from './components/Disable';

const ToggleDocs = () => {
  return (
    <DocTemplate title="Toggle">
      <DocSectionTitle>Usage</DocSectionTitle>

      <DocExampleRenderer
        code={basicUsageCode}
        title="Basic"
        content={<BasicUsage />}
      />

      <DocExampleRenderer
        code={customColorCode}
        title="Custom color"
        content={<CustomColor />}
      />

      <DocExampleRenderer
        code={disableCode}
        title="Disabling control"
        content={<Disable />}
      />
    </DocTemplate>
  );
};

export default ToggleDocs;
