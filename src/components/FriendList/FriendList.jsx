import { StyledList } from './FriendListStyled';
import FriendItem from '../FriendList/FriendItem';
export default function FriendList({ friendsData }) {
  return (
    <StyledList>
      {friendsData.map(friend => (
        <FriendItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          status={friend.isOnline}
        ></FriendItem>
      ))}
    </StyledList>
  );
}
