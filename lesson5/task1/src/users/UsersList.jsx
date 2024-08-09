import React from 'react';
import { connect } from 'react-redux';
import Pagination from './Pagination';
import User from './User';
import { goPrev, goNext } from './users.actions';
import { usersListSelector, currentPageSelector } from './users.selectors.js';

const UsersList = ({ usersList, currentPage, goPrev, goNext }) => {
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
          <User key={user.id} name={user.name} age={user.age} />
        ))}
      </ul>
    </div>
  );
};

const mapState = (state) => {
  return {
    usersList: usersListSelector(state),
    currentPage: currentPageSelector(state),
  };
};

const mapDispatch = {
  goNext,
  goPrev,
};

export default connect(mapState, mapDispatch)(UsersList);
