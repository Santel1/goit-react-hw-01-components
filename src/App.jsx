import { Profile } from 'components/Profile/Profile';
import { Statistic } from 'components/Statistics/Statistics';
import { FriendsList } from 'components/Friends/Friends';
import { TransactionTable } from 'components/TransactionHistory/TransactionHistory';
import user from '../src/api/user.json';
import data from '../src/api/data.json';
import friends from '../src/api/friends.json';
import transactions from '../src/api/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" data={data} />
      <FriendsList friends={friends} />
      <TransactionTable transactions={transactions} />
    </div>
  );
};
