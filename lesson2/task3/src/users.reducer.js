import { ADD_USER, REMOVE_USER } from './users.actions';

const initialState = {
  usersList: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        usersList: [...state.usersList, action.payload],
      };
    case REMOVE_USER:
      return {
        ...state,
        usersList: state.usersList.filter((user) => user.id !== action.payload),
      };
    default:
      return state;
  }
};

export default userReducer;
