import PropTypes from 'prop-types';
import photo from '../Profile/photo.jpg';
import { StyledWrapper } from '../Common/CommonStyle';
import { StyledStatsInfo, StyledImg, UserInfo } from './Profile.styled';

export default function User(props) {
  const { username, tag, location, stats } = props.userInfo;

  return (
    <StyledWrapper>
      <StyledImg src={photo} alt="User avatar" />

      <UserInfo>
        <p> {username}</p>
        <p>{tag}</p>
        <p>{location}</p>
      </UserInfo>

      <StyledStatsInfo>
        <li>
          <span>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>
        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </StyledStatsInfo>
    </StyledWrapper>
  );
}
User.propTypes = {
  userInfo: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
  }).isRequired,
};
