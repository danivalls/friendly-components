import DocSectionTitle from 'components/DocSectionTitle'
import DocTemplate from 'components/DocTemplate'
import JSXCode from 'components/JSXCode'
import React from 'react'
import {
  addingThemeProvider,
  fullInstallationCommand,
  installationCommand
} from './codeExamples'
import { Paragraph } from './Installation.styled'

const GettingStarted = () => {
  return (
    <DocTemplate title='Installation'>
      <DocSectionTitle>Add it to your project</DocSectionTitle>
      <Paragraph>
        FriendlyComponents has <code>styled-components</code> as peer
        dependency, which means you'll need to install it into your project if
        you haven't already.
      </Paragraph>
      <Paragraph>
        If you don't have <code>styled-components</code> installed in your
        project, you'll need to run the following command to install both
        <code>styled-components</code> and <code>friendly-components</code>:
      </Paragraph>
      <JSXCode code={fullInstallationCommand} />
      <Paragraph>
        Or, if you already have <code>styled-components</code> installed in your
        project, simply run:
      </Paragraph>
      <JSXCode code={installationCommand} />

      <DocSectionTitle>Set up</DocSectionTitle>
      <Paragraph>
        Add FriendlyComponents' theme provider to your application providers.
      </Paragraph>
      <Paragraph>
        This will provide FriendlyComponents with the necessary css styles and
        font imports.
      </Paragraph>
      <Paragraph>
        Here you have an example adding the ThemeProvider to a generic{' '}
        <code>app.js</code>:
      </Paragraph>
      <JSXCode code={addingThemeProvider} />
    </DocTemplate>
  )
}

export default GettingStarted
