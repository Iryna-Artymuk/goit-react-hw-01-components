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
import { Cart, Layout, ContentWrapper } from './Layout/Layout.styled';
export const App = () => {
  return (
    <Layout>
      <Global styles={emotionReset} />
      <ContentWrapper>
        <Cart>
          <User userInfo={userInfo}></User>
        </Cart>
        <Cart>
          <Statistics stats={StatisticData} title="Upload stats"></Statistics>
        </Cart>
        <Cart>
          <FriendList friendsData={friendsData}></FriendList>
        </Cart>
        <Cart>
          <TransactionsList
            transactionsData={transactionsData}
          ></TransactionsList>
        </Cart>
      </ContentWrapper>
    </Layout>
  );
};
