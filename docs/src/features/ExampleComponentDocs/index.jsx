import DocExampleRenderer from 'components/DocExampleRenderer'
import DocSectionSubtitle from 'components/DocSectionSubtitle'
import DocSectionTitle from 'components/DocSectionTitle'
import DocTemplate from 'components/DocTemplate'
import JSXCode from 'components/JSXCode'
import React from 'react'
import Example, { exampleCode } from './components/usage'

const ExampleComponentsDocs = () => {
  return (
    <DocTemplate
      title='Example Component'
      description='This is an example of a component description'
    >
      <DocSectionTitle>Installation</DocSectionTitle>
      <JSXCode code="import { ExampleComponent } from 'friendly-components'" />

      <DocSectionTitle>How to use</DocSectionTitle>
      <DocSectionSubtitle>Basic usage</DocSectionSubtitle>
      <DocExampleRenderer code={exampleCode}>
        <Example />
      </DocExampleRenderer>
    </DocTemplate>
  )
}

export default ExampleComponentsDocs
