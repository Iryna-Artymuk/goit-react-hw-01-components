import ItemFriend from './ItemFriend';
export default function FriendList({ friendsData }) {
  return (
    <ul>
      {friendsData.map(friend => (
        <ItemFriend
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          onLineStatus={friend.isOnline}
        ></ItemFriend>
      ))}
    </ul>
  );
}
