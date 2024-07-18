import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import { goPrev, goNext } from './user.actions';

const UsersList = ({ usersList = [], currentPage = 0, goPrev, goNext }) => {
  const itemsPerPage = 3;

  const startIndex = currentPage * itemsPerPage;
  const visibleUsers = usersList.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div>
      <Pagination
        goPrev={goPrev}
        goNext={goNext}
        currentPage={currentPage}
        totalItems={usersList.length}
        itemsPerPage={itemsPerPage}
      />
      <ul className="users">
        {visibleUsers.map((user) => (
          <li key={user.id} className="user">
            <span className="user__name">{user.name}</span>
            <span className="user__age">{user.age}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => ({
  usersList: state.usersList,
  currentPage: state.currentPage,
});

const mapDispatch = {
  goNext,
  goPrev,
};

const connector = connect(mapState, mapDispatch);
const ConnectedUsers = connector(UsersList);

export default ConnectedUsers;
