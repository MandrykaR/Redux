export const ADD_USER = 'ADD_USER';
export const DELETE_USER = 'DELETE_USER';

export const addUser = (userData) => ({
  type: ADD_USER,
  payload: { userData },
});

export const deleteUser = (userId) => ({
  type: DELETE_USER,
  payload: { userId },
});
