import PropTypes from 'prop-types';
import FriendListItem from '../friends-list-item/FriendListItem';
import { StyledList } from './friendsList.styled';


const FriendList = ({ friends }) => {
  return (
    <StyledList>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </StyledList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default FriendList;