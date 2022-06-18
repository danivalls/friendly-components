import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import PropsTable from 'components/PropsTable';
import React from 'react';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import ColoringUsingCustomColor, {
  coloringUsingCustomColorCode
} from './components/ColoringUsingCustomColor';
import ColoringUsingTheme, {
  coloringUsingThemeCode
} from './components/ColoringUsingTheme';
import props, { radioOptionData } from './radioProps';

const RadioDocs = () => {
  return (
    <DocTemplate title="Radio">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer
        title="Basic Usage"
        code={basicUsageCode}
        content={<BasicUsage />}
      />
      <DocExampleRenderer
        title="Coloring using theme colors"
        code={coloringUsingThemeCode}
        content={<ColoringUsingTheme />}
      />

      <DocExampleRenderer
        title="Coloring using custom colors"
        code={coloringUsingCustomColorCode}
        content={<ColoringUsingCustomColor />}
      />

      <DocSectionTitle>API</DocSectionTitle>
      <PropsTable title="Props" props={props} />
      <PropsTable title="RadioOptionData" props={radioOptionData} />
    </DocTemplate>
  );
};

export default RadioDocs;
