import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import IconsList from './components/IconsList';

const IconDocs = () => {
  return (
    <DocTemplate title="Icon">
      <DocSectionTitle>About</DocSectionTitle>
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocSectionTitle>List of icons</DocSectionTitle>
      <IconsList />
    </DocTemplate>
  );
};

export default IconDocs;
