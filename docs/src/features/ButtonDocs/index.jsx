import DocSectionTitle from 'components/DocSectionTitle'
import DocTemplate from 'components/DocTemplate'
import JSXCode from 'components/JSXCode'
import React from 'react'
import { importCode } from './codeExamples'
import BasicUsage from './components/BasicUsage'

const ButtonDocs = () => {
  return (
    <DocTemplate title='Button'>
      <DocSectionTitle>Usage</DocSectionTitle>
      <BasicUsage />
      <JSXCode code={importCode} />
    </DocTemplate>
  )
}

export default ButtonDocs
