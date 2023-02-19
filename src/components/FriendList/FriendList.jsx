import { StyledList, StyledListItem } from './FriendListStyled';

export default function FriendList({ friendsData }) {
  console.log(friendsData);
  return (
    <StyledList>
      {friendsData.map(friend => (
        <StyledListItem key={friend.id}>
          <span
            style={{
              backgroundColor: friend.isOnline ? 'green' : 'red',
            }}
          ></span>

          <img src={friend.avatar} alt="User avatar" width="48" />
          <p> {friend.name}</p>
        </StyledListItem>
      ))}
    </StyledList>
  );
}
