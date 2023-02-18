import userInfo from '../Data/user.json';
import StatisticData from '../Data/data.json';
import friendsData from '../Data/friends.json';
import User from '../components/Profile/Profile';
import Statistics from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <User userInfo={userInfo}></User>

      <Statistics stats={StatisticData} title="Upload stats"></Statistics>

      <FriendList friendsData={friendsData}></FriendList>
    </div>
  );
};
