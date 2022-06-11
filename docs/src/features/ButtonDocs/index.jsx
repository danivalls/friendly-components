import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import PropsTable from 'components/PropsTable';
import React from 'react';
import props from './buttonProps';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import CustomColors, { customColorsCode } from './components/CustomColors';
import Outlined, { outlinedCode } from './components/Outlined';

const ButtonDocs = () => {
  return (
    <DocTemplate title="Button">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer
        title="Basic"
        code={basicUsageCode}
        content={<BasicUsage />}
      />

      <DocExampleRenderer
        title="Outlined"
        code={outlinedCode}
        content={<Outlined />}
      />

      <DocExampleRenderer
        title="Custom color"
        code={customColorsCode}
        content={<CustomColors />}
      />

      <DocSectionTitle>API</DocSectionTitle>
      <PropsTable title="Props" props={props} />
    </DocTemplate>
  );
};

export default ButtonDocs;
