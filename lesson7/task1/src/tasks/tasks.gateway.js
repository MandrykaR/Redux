const baseUrl = 'https://658d94da7c48dce9473970f5.mockapi.io/api/v1/tasks';

export const createTask = async (taskData) => {
  const response = await fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to create task');
  }
  return await response.json();
};

export const updateTask = async (taskId, taskData) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'PUT',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    throw new Error('Failed to update task');
  }
  return await response.json();
};

export const deleteTask = async (taskId) => {
  const response = await fetch(`${baseUrl}/${taskId}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Failed to delete task');
  }
  return await response.json();
};

export const fetchTaskList = () =>
  fetch(baseUrl).then((response) => response.json());
