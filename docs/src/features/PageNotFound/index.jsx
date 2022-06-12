import { Icon } from 'friendly-components';
import React from 'react';
import {
  Container,
  IconContainer,
  NotFoundLayout,
  Subtitle,
  Title
} from './PageNotFound.styled';

const NotFound = () => {
  return (
    <Container>
      <NotFoundLayout>
        <IconContainer>
          <Icon name="Compass" size="4.5rem" />
        </IconContainer>
        <Title>404</Title>
        <Subtitle>Page not found</Subtitle>
      </NotFoundLayout>
    </Container>
  );
};

export default NotFound;
