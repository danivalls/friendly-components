import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import React from 'react';
import ActiveRows from './components/ActiveRows';
import BasicUsage from './components/BasicUsage';
import ClickableRows from './components/ClickableRows';
import ContentEnrichment from './components/ContentEnrichment';
import InconsistentData from './components/InconsistentData';
import SelectableRows from './components/SelectableRows';

const TableDocs = () => {
  return (
    <DocTemplate title="Table">
      <DocSectionTitle>Usage</DocSectionTitle>
      <DocExampleRenderer title="Basic Usage" code={BasicUsage.code}>
        <BasicUsage />
      </DocExampleRenderer>

      <DocExampleRenderer
        title="Content Enrichment"
        code={ContentEnrichment.code}
      >
        <ContentEnrichment />
      </DocExampleRenderer>

      <DocExampleRenderer title="Clickable Rows" code={ClickableRows.code}>
        <ClickableRows />
      </DocExampleRenderer>

      <DocExampleRenderer title="Active Rows" code={ActiveRows.code}>
        <ActiveRows />
      </DocExampleRenderer>

      <DocExampleRenderer title="Selectable Rows" code={SelectableRows.code}>
        <SelectableRows />
      </DocExampleRenderer>

      <DocExampleRenderer
        title="Dealing with inconsistent data"
        code={InconsistentData.code}
      >
        <InconsistentData />
      </DocExampleRenderer>
    </DocTemplate>
  );
};

export default TableDocs;
