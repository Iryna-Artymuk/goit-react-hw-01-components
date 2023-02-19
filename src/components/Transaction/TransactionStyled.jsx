import styled from '@emotion/styled';
const StyledTable = styled.table`
  margin: 10px;
  width: 100%;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
`;
const StyledRow = styled.tr`
  width: 100%;
  height: 20px;
  padding: 5px;
`;
const StyledHead = styled.th`
  height: 30px;
  text-align: left;
`;

const Tbody = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: #f6e9cd;
  }
`;

const StyledData = styled.td`
  padding: 5 px;
  text-align: left;
  color: ${props => {
    console.log(props.type);
    if (props.type === 'withdrawal') {
      return 'red';
    }
    if (props.type === 'deposit') {
      return 'green';
    }
    if (props.type === 'invoice') {
      return 'blue';
    } else {
      return 'black';
    }
  }};
`;
export { StyledRow, Tbody, StyledData, StyledHead, StyledTable };
