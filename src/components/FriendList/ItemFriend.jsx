export default function ItemFriend({ avatar, name, onLineStatus, id }) {
  return (
    <li key={id}>
      <span></span>
      <img src={avatar} alt="User avatar" width="48" />
      <p>{name} </p>
    </li>
  );
}
