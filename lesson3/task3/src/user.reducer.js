import { SET_USER, REMOVE_USER } from './user.actions';

const initialState = {
  user: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        user: action.payload,
      };
    }

    case REMOVE_USER: {
      return {
        ...state,
        user: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
