import PropTypes from "prop-types";
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { List } from "./FriendList.styled";
export const FriendList = ({ friends }) => {
  return (
    <List>
     {friends.map(item => 
        <FriendListItem key={item.id} data={item} />
      )}
    </List>
  );
};

FriendList.propTypes ={
  friends: PropTypes.array.isRequired,
  }