import styled, { keyframes } from 'styled-components';

const rotateNonsense = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(75deg); }
  20% { transform: rotate(90deg); }
  30% { transform: rotate(-80deg); }
  40% { transform: rotate(-25deg); }
  50% { transform: rotate(-30deg); }
  60% { transform: rotate(30deg); }
  75% { transform: rotate(-180deg); }
  100% { transform: rotate(0deg); }
`;

export const Container = styled.main`
  height: 100%;

  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;

  color: ${({ theme }) => theme.colors.neutralDark};
`;

export const IconContainer = styled.div`
  grid-row: 1 / 3;

  display: flex;
  align-items: center;
  margin-right: 1rem;

  svg {
    animation: ${rotateNonsense} 5s
      ${({ theme }) => theme.animationTimings.bounce} infinite;
  }
`;

export const NotFoundLayout = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`;

export const Title = styled.h1`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.title1};
  line-height: ${({ theme }) => theme.lineHeight.title2};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const Subtitle = styled.h2`
  margin: 0;
  font-size: ${({ theme }) => theme.fontSize.title3};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
