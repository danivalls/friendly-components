import GitHubButton from 'components/GitHubButton';
import React from 'react';
import {
  ButtonsContainer,
  GetStartedButton,
  HomeLayout,
  Logo,
  MainContent,
  Subtitle,
  Title
} from './Home.styled';

const Home = () => {
  return (
    <HomeLayout>
      <MainContent className="main-content">
        <Logo />
        <Title>FriendlyComponents</Title>
        <Subtitle>A components library for React</Subtitle>
        <ButtonsContainer>
          <GitHubButton />
          <GetStartedButton>Get Started</GetStartedButton>
        </ButtonsContainer>
      </MainContent>
    </HomeLayout>
  );
};

export default Home;
