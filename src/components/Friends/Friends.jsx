import css from './Friends.module.css';

export const FriendsList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(({ id, isOnline, avatar, name }) => {
        return (
          <FriendsListItem
            key={id}
            isOnline={isOnline}
            avatar={avatar}
            name={name}
          />
        );
      })}
    </ul>
  );
};

export const FriendsListItem = props => {
  return (
    <li className={css.item}>
      <span className={`${props.isOnline ? css.online : css.status}`}></span>
      <img
        className={css.avatar}
        src={props.avatar}
        alt={props.name}
        width="48"
      />
      <p className={css.name}>{props.name}</p>
    </li>
  );
};
