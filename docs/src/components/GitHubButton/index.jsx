import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { GHLink } from './GitHubButton.styled'

const GITHUB_REPO = 'https://github.com/danivalls/friendly-components'

const GitHubButton = () => {
  return (
    <GHLink href={GITHUB_REPO} target='_blank'>
      <FontAwesomeIcon icon={faGithubAlt} />
    </GHLink>
  )
}

export default GitHubButton
