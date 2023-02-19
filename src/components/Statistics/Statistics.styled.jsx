import styled from '@emotion/styled';
const StyledTitle = styled.h2`
  font-size: 48px;
  margin-bottom: 20px;
`;

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 32px;
`;

const StyledInfo = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 30px;
  background-color: ${props => {
    if (props.type === '.docx') {
      return 'blue';
    }
    if (props.type === '.pdf') {
      return 'red';
    }
    if (props.type === '.mp3') {
      return 'yellow';
    }
    if (props.type === '.psd') {
      return 'green';
    }
  }};
`;

export { StyledList, StyledTitle, StyledInfo };
