import { SORT_USERS, SET_CURRENT_PAGE } from './user.actions';

const initialState = {
  users: {
    usersList: [
      { id: 'id-0', age: 21, name: 'Bob' },
      { id: 'id-1', age: 17, name: 'Tom' },
      { id: 'id-2', age: 18, name: 'Tad' },
      { id: 'id-3', age: 45, name: 'Justin' },
      { id: 'id-4', age: 45, name: 'Franklin' },
      { id: 'id-5', age: 45, name: 'John' },
      { id: 'id-6', age: 45, name: 'Andrew' },
      { id: 'id-7', age: 45, name: 'Pol' },
      { id: 'id-8', age: 45, name: 'Ron' },
      { id: 'id-9', age: 45, name: 'Harry' },
      { id: 'id-10', age: 45, name: 'Anna' },
    ],
    currentPage: 0,
  },
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SORT_USERS:
      const { sortBy, sortOrder } = action.payload;
      const sortedUsers = [...state.users.usersList].sort((a, b) => {
        if (a[sortBy] < b[sortBy]) return sortOrder === 'asc' ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortOrder === 'asc' ? 1 : -1;
        return 0;
      });
      return {
        ...state,
        users: {
          ...state.users,
          usersList: sortedUsers,
        },
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        users: {
          ...state.users,
          currentPage: action.payload,
        },
      };

    default:
      return state;
  }
};
