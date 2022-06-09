import GitHubButton from 'components/GitHubButton';
import React from 'react';
import { Container, Extras, FCLogo, Title } from './Topbar.styled';

const Topbar = () => {
  return (
    <Container>
      <Title>
        <FCLogo />
        FriendlyComponents
      </Title>
      <Extras>
        <GitHubButton />
      </Extras>
    </Container>
  );
};

export default Topbar;
