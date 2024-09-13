import { TASK_LIST_RECEIVED } from './tasks.actions';

const initialState = {
  tasks: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LIST_RECEIVED:
      return {
        ...state,
        tasks: action.payload.tasksList,
      };

    default:
      return state;
  }
};

export default tasksReducer;
