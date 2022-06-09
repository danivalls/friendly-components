import React from 'react';
import { GHLink, GHLogo } from './GitHubButton.styled';

const GITHUB_REPO = 'https://github.com/danivalls/friendly-components';

const GitHubButton = () => {
  return (
    <GHLink href={GITHUB_REPO} target="_blank">
      <GHLogo />
    </GHLink>
  );
};

export default GitHubButton;
