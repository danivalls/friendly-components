import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage from './components/BasicUsage';
import WithIcon from './components/WithIcon';
import WithLabel from './components/WithLabel';
import WithType from './components/WithType';

const InputDocs = () => {
  return (
    <DocTemplate title="Input">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer title="Basic" code={BasicUsage.code}>
        <BasicUsage />
      </DocExampleRenderer>
      <DocExampleRenderer title="Label" code={WithType.code}>
        <WithLabel />
      </DocExampleRenderer>
      <DocExampleRenderer title="Icon" code={WithIcon.code}>
        <WithIcon />
      </DocExampleRenderer>
      <DocExampleRenderer title="Input Type" code={WithType.code}>
        <WithType />
      </DocExampleRenderer>
    </DocTemplate>
  );
};

export default InputDocs;
