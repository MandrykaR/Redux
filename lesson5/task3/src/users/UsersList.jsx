import React from 'react';
import User from './User';
import Filter from '../Filter';

const UsersList = ({ filterText }) => {
  return (
    <div>
      <Filter />
      <User />
    </div>
  );
};

const mapState = {
  filterText: filterTextSelector(state),
  filteredUsers: filteredUsersSelector(state),
  userCount: userCountSelector(state),
};

export default connect(mapState)(UsersList);
