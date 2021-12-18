import DocSectionTitle from 'components/DocSectionTitle';
import DocTemplate from 'components/DocTemplate';
import JSXCode from 'components/JSXCode';
import React from 'react';
import { addingThemeProvider, installationCommand } from './codeExamples';
import { Paragraph } from './Installation.styled';

const Installation = () => {
  return (
    <DocTemplate title="Installation">
      <DocSectionTitle>Add it to your project</DocSectionTitle>
      <Paragraph>
        To start using FriendlyComponents in your React project, just install it
        as dependency using the following command:
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
  );
};

export default Installation;
