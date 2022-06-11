import DocSectionSubtitle from 'components/DocSectionSubtitle';
import styled from 'styled-components';

export const ComponentFrame = styled.div`
  padding: ${({ theme }) => theme.spacing.base} 0;
`;

export const Title = styled(DocSectionSubtitle)`
  margin: 0;
`;
