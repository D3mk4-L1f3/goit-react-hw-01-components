import styled from 'styled-components';

const StyledSection = styled.section`
  border-radius: 5px;
  color: #fdfdff;
  background-color: rgba(21, 21, 21, 0.6);
  overflow: hidden;
  text-align: center;
  font-size: 30px;
  transition: 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    cursor: pointer;
  }
  h2 {
    font-size: 30px;
    padding: 20px;
  }
`;

const StyledList = styled.ul`
  display: flex;
  align-items: center;

  li {
    padding: 10px;
    width: 100%;
    &:hover {
      transform: scale(1.03);
    box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    }
  }

  li > span {
    display: block;
    font-weight: 400;
  }

  li > span:last-child {
    font-weight: 700;
  }
`;

export { StyledSection, StyledList };