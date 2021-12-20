import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage from './components/BasicUsage';
import Outlined from './components/Outlined';

const ButtonDocs = () => {
  return (
    <DocTemplate title="Button">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer title="Basic" code={BasicUsage.code}>
        <BasicUsage />
      </DocExampleRenderer>

      <DocExampleRenderer title="Outlined" code={Outlined.code}>
        <Outlined />
      </DocExampleRenderer>
    </DocTemplate>
  );
};

export default ButtonDocs;
