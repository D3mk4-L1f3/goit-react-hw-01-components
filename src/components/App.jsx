import user from '../data/user.json';
import data from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

import Profile from './profile/Profile.jsx';
import Statistics from './statistics/Statistics';
import FriendList from './friends-list/FriendsList';
import TransactionsHistory from './transactions/TransactionsHistory';

import { Container } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title='Upload Stats' stats={data} />
      <FriendList friends={friends} />
      <TransactionsHistory items={transactions} />
    </Container>
  );
};