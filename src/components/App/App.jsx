import { FriendList } from '../FriendList/FriendList/FriendList';
import { Profile } from '../Profile/Profile';
import { Statistics } from '../Statistics/Statistics';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import user from '../json/user.json';
import data from '../json/data.json';
import friends from '../json/friends.json';
import transactions from '../json/transactions.json'
import { Container } from './App.styled';
export const App = () => {
  return (
    <Container
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
    </Container>
  );
};
