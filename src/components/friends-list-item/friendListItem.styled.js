import styled from 'styled-components';

const StyledStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => ( props.$status === 'true' ? 'green' : 'red')};
`;

export { StyledStatus };