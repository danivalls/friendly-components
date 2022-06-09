import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import WithIcon, { withIconCode } from './components/WithIcon';
import WithLabel, { withLabelCode } from './components/WithLabel';
import WithType, { withTypeCode } from './components/WithType';

const InputDocs = () => {
  return (
    <DocTemplate title="Input">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer
        title="Basic"
        code={basicUsageCode}
        content={<BasicUsage />}
      />
      <DocExampleRenderer
        title="Label"
        code={withLabelCode}
        content={<WithLabel />}
      />
      <DocExampleRenderer
        title="Icon"
        code={withIconCode}
        content={<WithIcon />}
      />
      <DocExampleRenderer
        title="Input Type"
        code={withTypeCode}
        content={<WithType />}
      />
    </DocTemplate>
  );
};

export default InputDocs;
