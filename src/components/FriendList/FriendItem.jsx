import PropTypes from 'prop-types';
import { StyledInfo } from './FriendListStyled';
export default function FriendItem({ avatar, name, status }) {
  return (
    <li>
      <StyledInfo>
        <span
          style={{
            backgroundColor: status ? 'green' : 'red',
            display: 'block',
          }}
        ></span>
        <img src={avatar} alt="User avatar" width="48" />
        <p> {name}</p>
      </StyledInfo>
    </li>
  );
}

FriendItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.bool,
};
