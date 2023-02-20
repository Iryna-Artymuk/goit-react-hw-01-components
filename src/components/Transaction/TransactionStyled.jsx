import styled from '@emotion/styled';
const StyledTable = styled.table`
  margin: 10px;
  width: 100%;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
`;

const Thead = styled.thead`
  tr {
    padding: 25px;
    background-color: pink;
  }
`;
const StyledHead = styled.th`
  height: 40px;
  text-align: left;
`;

const Tbody = styled.tbody`
  tr:nth-of-type(odd) {
    background-color: pink;
  }
`;

const StyledData = styled.td`
  padding: 5px;
  text-align: left;
  color: ${props => {
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
export { Thead, Tbody, StyledData, StyledHead, StyledTable };
