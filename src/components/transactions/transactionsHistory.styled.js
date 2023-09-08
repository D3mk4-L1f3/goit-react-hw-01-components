import styled from 'styled-components';

const StyledTable = styled.table`
  width: 950px;
  font-size: 20px;
  border-radius: 5px;
  text-align: center;
  overflow: hidden;
  color: #242424;
  background-color: #7e8fdd;
  
  th {
    background-color: rgba(36, 36, 36, 0.8);
    
    color: #fdfdff;
    padding: 15px 0;
    text-transform: uppercase;
  }

  tbody {
    td {
      padding: 15px;
    }
    tr:nth-child(even) {
      background-color: rgba(223, 227, 230, 0.8);
    }
    td::first-letter {
      text-transform: uppercase;
    }
  }
`;

export { StyledTable };