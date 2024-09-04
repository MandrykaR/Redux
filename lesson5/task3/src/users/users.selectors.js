export const usersListSelector = (state) => {
  return state.users.usersList;
};

export const filterTextSelector = (state) => state.filterText;

export const filteredUsersSelector = (state) => {
  const allUsersList = state.users.usersList;
  const filterText = state.filterText.toLowerCase();

  return allUsersList.filter((user) =>
    user.name.toLowerCase().includes(filterText)
  );
};

export const userCountSelector = (state) => filteredUsersSelector(state).length;
