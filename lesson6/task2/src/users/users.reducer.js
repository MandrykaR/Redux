import { SHOW_SPINNER } from './users.actions';

const initialData = {
  isFetching: false,
};

const usersReducer = (state = initialData, action) => {
  switch (action.type) {
    case SHOW_SPINNER: {
      return {
        ...state,
        isFetching: true,
      };
    }
    default:
      return state;
  }
};

export default usersReducer;
