export const FILTER_USERS = 'USERS/FILTER_USERS';

export const filterUsers = (userId) => {
  return {
    type: FILTER_USERS,
    payload: {
      userId,
    },
  };
};
