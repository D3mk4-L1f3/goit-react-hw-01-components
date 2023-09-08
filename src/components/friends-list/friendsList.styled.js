import styled from 'styled-components';

const StyledList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 15px;
   
li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    padding: 5px;
    transition: scale 400ms cubic-bezier(0.165, 0.84, 0.44, 1);
    &:hover {
      &:hover {
        cursor: pointer;
      transform: scale(1.03);
    box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -webkit-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    -moz-box-shadow: 1px 6px 8px 2px rgba(173, 173, 173, 0.8);
    } 
    }

    img {
      width: 70px;
    }
    p {
      font-size: 20px;
      font-weight: 800;
    }
  }
`;

export { StyledList };