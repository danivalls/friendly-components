import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage from './components/BasicUsage';
import CustomColor from './components/CustomColor';
import Disable from './components/Disable';

const ToggleDocs = () => {
  return (
    <DocTemplate title="Toggle">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer code={BasicUsage.code} title="Basic">
        <BasicUsage />
      </DocExampleRenderer>
      <DocExampleRenderer code={CustomColor.code} title="Custom color">
        <CustomColor />
      </DocExampleRenderer>
      <DocExampleRenderer code={Disable.code} title="Disabling control">
        <Disable />
      </DocExampleRenderer>
    </DocTemplate>
  );
};

export default ToggleDocs;
