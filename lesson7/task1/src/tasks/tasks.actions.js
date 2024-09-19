import * as tasksGateway from './tasks.gateway';
import { tasksListSelector } from './tasks.selectors';

export const TASK_LIST_RECEIVED = 'TASK_LIST_RECEIVED';

export const taskListReceived = (taskList) => {
  const action = {
    type: TASK_LIST_RECEIVED,
    payload: { taskList },
  };

  return action;
};

export const getListTask = () => {
  const thunkAction = function (dispatch) {
    tasksGateway.fetchTaskList().then((tasksList) => {
      dispatch(taskListReceived(tasksList));
    });
  };
  return thunkAction;
};

export const updateTask = (taskId) => {
  const thunkAction = function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const task = tasksList.find((task) => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    tasksGateway.updateTask(taskId, updatedTask).then(() => {
      dispatch(getListTask());
    });
  };
  return thunkAction;
};

export const deleteTask = (taskId) => {
  const thunkAction = function (dispatch) {
    tasksGateway.deleteTask(taskId).then(() => {
      dispatch(getListTask());
    });
  };
  return thunkAction;
};

export const createTask = (text) => {
  const thunkAction = function (dispatch) {
    const taskData = {
      text,
      done: false,
      createdAt: new Date().toISOString(),
    };
    tasksGateway.createTask(taskData).then(() => {
      dispatch(getListTask());
    });
  };
  return thunkAction;
};
