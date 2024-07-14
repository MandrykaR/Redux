import { SET_USER, REMOVE_USER } from './user.actions';

const initialState = {
  currentUser: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }

    case REMOVE_USER: {
      return {
        ...state,
        currentUser: [],
      };
    }

    default: {
      return state;
    }
  }
};

export default usersReducer;
