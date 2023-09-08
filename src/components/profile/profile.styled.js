import styled from 'styled-components';

const StyledProfile = styled.div`
  text-align: center;
  font-size: 24px;
  border-radius: 5px;
  background-color: rgba(156, 223, 223, 0.8);;
  overflow: hidden;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
`;

const StyledDescription = styled.div`
  padding: 10px;
  img {
    overflow: hidden;
    margin: 30px auto;
    border-radius: 50%;
    background-color: rgba(21, 21, 21, 0.6);
  }
`;

const StyledName = styled.p`
  font-size: 40px;
  margin-bottom: 15px;
  color: rgba(36, 36, 36, 0.5);
`;

const StyledInfo = styled.div`
  color: #242424;
  margin-bottom: 20px;
`;

const StyledStats = styled.ul`
  display: flex;
  align-items: center;
  background-color: #6e7fcf;
  li {
    padding: 15px;
    &:hover {
      cursor: pointer;
      transform: scale(1.03);
    box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    }
  }
  li > span {
    color: #fdfdff;
    display: block;
  }

  li > span:last-child {
    color: #242424;
    font-weight: 800;
  }
`;

export {
  StyledProfile,
  StyledDescription,
  StyledName,
  StyledInfo,
  StyledStats,
};