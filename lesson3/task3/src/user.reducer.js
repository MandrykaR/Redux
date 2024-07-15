export const SET_USER = 'SET_USER';
export const REMOVE_USER = 'REMOVE_USER';

const initialState = {
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.payload,
      };

    case REMOVE_USER:
      return null;

    default:
      return state;
  }
};

export default usersReducer;
