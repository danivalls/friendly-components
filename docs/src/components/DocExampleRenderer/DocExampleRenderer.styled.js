import DocSectionSubtitle from 'components/DocSectionSubtitle';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: white;
  border: 1px solid ${({ theme }) => theme.colors.neutralDark};
  padding: ${({ theme }) => theme.spacing.base};
  border-radius: ${({ theme }) => theme.borderRadius.base};
  margin-bottom: ${({ theme }) => theme.spacing.large};
`;

export const ComponentFrame = styled.div`
  padding: ${({ theme }) => theme.spacing.base} 0;
`;

export const Title = styled(DocSectionSubtitle)`
  margin: 0;
`;
