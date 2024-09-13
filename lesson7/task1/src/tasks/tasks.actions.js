import { fetchTaskList } from './tasks.gateway';

export const TASK_LIST_RECEIVED = 'TASK_LIST_RECEIVED';

export const taskListReceived = (taskList) => {
  const action = {
    type: TASK_LIST_RECEIVED,
    payload: { taskList },
  };

  return action;
};

export const getListTask = (dispatch) => {
  const thunkActions = function () {
    fetchTaskList().then((taskList) => dispatch(taskListReceived(taskList)));
  };

  return thunkActions;
};
