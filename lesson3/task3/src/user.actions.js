import { SET_USER, REMOVE_USER } from './user.reducer';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user,
});

export const removeUser = () => ({
  type: REMOVE_USER,
});
