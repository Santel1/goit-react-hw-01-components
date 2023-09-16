import { Profile } from 'components/Profile';
import { Statistic, StatisticItem } from 'components/Statistics';
import { FriendsList, FriendsListItem } from 'components/Friends';
import {
  TransactionItem,
  TransactionTable,
} from 'components/TransactionHistory';
import user from '../src/api/user.json';
import stats from '../src/api/data.json';
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

      <Statistic title="Upload stats">
        {stats.map(stat => {
          return (
            <StatisticItem
              key={stat.id}
              label={stat.label}
              percentage={stat.percentage}
            />
          );
        })}
      </Statistic>

      <FriendsList>
        {friends.map(friend => {
          return (
            <FriendsListItem
              key={friend.id}
              isOnline={friend.isOnline}
              avatar={friend.avatar}
              name={friend.name}
            />
          );
        })}
      </FriendsList>

      <TransactionTable>
        {transactions.map(transaction => {
          return (
            <TransactionItem
              key={transaction.id}
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
            />
          );
        })}
      </TransactionTable>
    </div>
  );
};
