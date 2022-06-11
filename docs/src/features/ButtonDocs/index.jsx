import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import PropsTable from 'components/PropsTable';
import React from 'react';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import CustomColors, { customColorsCode } from './components/CustomColors';
import Outlined, { outlinedCode } from './components/Outlined';

const props = [
  {
    name: 'type',
    description: 'Defines the appearance of the button.',
    type: '"default" | "outlined"',
    default: '"default"',
    required: false
  },
  {
    name: 'color',
    description: 'Defines the color of the button.',
    type: 'string',
    default: '"primary"',
    required: false
  },
  {
    name: 'onClick',
    description: 'Function to be called when the button is clicked.',
    type: 'function',
    required: false
  },
  {
    name: 'children',
    description: 'Content of the button.',
    type: 'node',
    required: false
  }
];

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
      <PropsTable props={props} />
    </DocTemplate>
  );
};

export default ButtonDocs;
