import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionContent from 'components/DocSectionContent';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import IconsList from './components/IconsList';
import UsageExample from './components/UsageExample';

const IconDocs = () => {
  return (
    <DocTemplate
      title="Icon"
      description={
        <DocSectionContent>
          This component uses{' '}
          <a href="https://www.npmjs.com/package/iconoir-react/">
            iconoir-react
          </a>{' '}
          under the hood to provide a collection of beautiful svg icons to use
          in your project.
        </DocSectionContent>
      }
    >
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer title="Using an icon" code={UsageExample.code}>
        <UsageExample />
      </DocExampleRenderer>
      <DocSectionTitle>List of icons</DocSectionTitle>
      <IconsList />
    </DocTemplate>
  );
};

export default IconDocs;
