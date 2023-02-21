import styled from '@emotion/styled';

const StyledImg = styled.img`
  width: 250px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  background-color: #f6e9cd;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
`;

const UserInfo = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;

  gap: 5px;
  padding: 5px;

  align-items: center;
  font-size: 24px;
  border-radius: 5px;
  background-color: #f6e9cd;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);

  p {
    padding: 5px;
  }
`;

const StyledStatsInfo = styled.ul`
  width: 250px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;

  align-items: center;

  font-size: 24px;

  border-radius: 5px;
  background-color: #f6e9cd;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);

  span {
    margin: 5px;
  }
`;
export { StyledImg, UserInfo, StyledStatsInfo };
