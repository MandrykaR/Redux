export const ADD_USER = 'ADD_USER';
export const REMOVE_USER = 'REMOVE_USER';

export const addUser = (user) => ({
  type: ADD_USER,
  payload: user,
});

export const removeUser = (user) => ({
  type: REMOVE_USER,
  payload: user,
});
