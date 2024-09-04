import React from 'react';
import { usersListSelector } from './users.selectors';
import { connect } from 'react-redux';

const User = ({ users }) => {
  return (
    <div>
      <ul className="users">
        {users.map((user) => (
          <li key={user.id} className="user">
            <span className="user__name">{user.name}</span>
            <span className="user__age">{user.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    users: usersListSelector(state),
  };
};

export default connect(mapState)(User);
