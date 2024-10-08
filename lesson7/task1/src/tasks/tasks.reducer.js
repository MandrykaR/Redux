import { TASK_LIST_RECEIVED } from './tasks.actions';

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASK_LIST_RECEIVED:
      return {
        ...state,
        tasksList: action.payload.taskList,
      };

    default:
      return state;
  }
};

export default tasksReducer;
