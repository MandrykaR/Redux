const baseUrl = 'https://658d94da7c48dce9473970f5.mockapi.io/api/v1/tasks';

export const createTask = (taskData) => {
  fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const updateTask = (taskId, taskData) => {
  fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(taskData),
  });
};

export const deleteTask = (taskId, taskData) => {
  fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
};

export const getTaskList = () =>
  fetch(baseUrl).then((response) => response.json());
