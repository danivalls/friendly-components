import DocExampleRenderer from 'components/DocExampleRenderer';
import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import PropsTable from 'components/PropsTable';
import React from 'react';
import ActiveRows, { activeRowsCode } from './components/ActiveRows';
import BasicUsage, { basicUsageCode } from './components/BasicUsage';
import ClickableRows, { clickableRowsCode } from './components/ClickableRows';
import ContentEnrichment, {
  contentEnrichmentCode
} from './components/ContentEnrichment';
import InconsistentData, {
  inconsistentDataCode
} from './components/InconsistentData';
import SelectableRows, {
  selectableRowsCode
} from './components/SelectableRows';
import props, { columnTypeData, rowTypeData } from './tableProps';

const TableDocs = () => {
  return (
    <DocTemplate title="Table">
      <DocSectionTitle>Usage</DocSectionTitle>

      <DocExampleRenderer
        title="Basic Usage"
        code={basicUsageCode}
        content={<BasicUsage />}
      />

      <DocExampleRenderer
        title="Content Enrichment"
        code={contentEnrichmentCode}
        content={<ContentEnrichment />}
      />

      <DocExampleRenderer
        title="Clickable Rows"
        code={clickableRowsCode}
        content={<ClickableRows />}
      />

      <DocExampleRenderer
        title="Active Rows"
        code={activeRowsCode}
        content={<ActiveRows />}
      />

      <DocExampleRenderer
        title="Selectable Rows"
        code={selectableRowsCode}
        content={<SelectableRows />}
      />

      <DocExampleRenderer
        title="Dealing with inconsistent data"
        code={inconsistentDataCode}
        content={<InconsistentData />}
      />

      <DocSectionTitle>API</DocSectionTitle>
      <PropsTable title="Props" props={props} />
      <PropsTable title="Column" props={columnTypeData} />
      <PropsTable title="Row" props={rowTypeData} />
    </DocTemplate>
  );
};

export default TableDocs;
