import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {
  ButtonsContainer,
  GetStartedButton,
  GitHubButton,
  HomeLayout,
  MainContent,
  Subtitle,
  Title
} from './Home.styled'

const GITHUB_REPO = 'https://github.com/danivalls/friendly-components'

const Home = () => {
  const openGithub = () => {
    window.open(GITHUB_REPO, '_blank').focus();
  }

  return (
    <HomeLayout>
      <MainContent className='main-content'>
        <Title>FriendlyComponents</Title>
        <Subtitle>A components library for React</Subtitle>
        <ButtonsContainer>
          <GitHubButton onClick={openGithub}>
            <FontAwesomeIcon icon={faGithubAlt} />
          </GitHubButton>

          <GetStartedButton>Get Started</GetStartedButton>
        </ButtonsContainer>
      </MainContent>
    </HomeLayout>
  )
}

export default Home
