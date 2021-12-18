import GitHubButton from 'components/GitHubButton';
import React from 'react';
import { Container, Extras, Title } from './Topbar.styled';

const Topbar = () => {
  return (
    <Container>
      <Title>FriendlyComponents</Title>
      <Extras>
        <GitHubButton />
      </Extras>
    </Container>
  );
};

export default Topbar;
