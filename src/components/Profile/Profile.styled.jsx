import styled from '@emotion/styled';

const StyledImg = styled.img`
  width: 250px;
  box-shadow: 3px 3px 20px rgba(0, 0, 0, 0.5);
  border-radius: 50%;
`;

const UserInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 5px;
  padding: 5px;

  align-items: center;
  font-size: 24px;

  p {
    padding: 5px;
  }
`;

const StyledStatsInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 5px;
  margin-top: 30px;
  align-items: center;

  font-size: 24px;

  span {
    margin: 5px;
  }
`;
export { StyledImg, UserInfo, StyledStatsInfo };
