import styled from '@emotion/styled';

const StyledList = styled.ul`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 500px;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 20px;
  background: wheat;
`;

const StyledListItem = styled.li`
  width: 250px;
  padding: 20px 30px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  background-color: #f6e9cd;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);

  span {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    display: block;
  }

  img {
    width: 50px;
  }
  p {
    font-size: 24px;
  }
`;

export { StyledListItem, StyledList };
