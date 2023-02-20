import userInfo from '../Data/user.json';
import StatisticData from '../Data/data.json';
import friendsData from '../Data/friends.json';
import transactionsData from '../Data/transactions.json';
import User from '../components/Profile/Profile';
import Statistics from './Statistics/StatisticsList';
import FriendList from './FriendList/FriendList';
import TransactionsList from './Transaction/TransactionsList';
import { Global } from '@emotion/react';
import { emotionReset } from '../components/Global/GlobalStyled';
import { Layout, ContentWrapper } from './Layout/Layout.styled';
export const App = () => {
  return (
    <Layout>
      <Global styles={emotionReset} />
      <ContentWrapper>
        <User userInfo={userInfo}></User>

        <Statistics stats={StatisticData} title="Upload stats"></Statistics>

        <FriendList friendsData={friendsData}></FriendList>

        <TransactionsList
          transactionsData={transactionsData}
        ></TransactionsList>
      </ContentWrapper>
    </Layout>
  );
};
