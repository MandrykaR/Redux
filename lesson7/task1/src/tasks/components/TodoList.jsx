import React, { Component, useState } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import {
  createTask,
  deleteTask,
  getTaskList,
  updateTask,
} from '../tasks.gateway';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
    };
  }

  componentDidMount() {
    this.fetchTasksList();
  }

  fetchTasksList = () => {
    getTaskList().then((tasksList) => {
      this.setState({ tasks: tasksList });
    });
  };

  handleTaskStatusChange = (id) => {
    const { tasks } = this.state;
    const task = tasks.find((task) => task.id === id);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    updateTask(id, updatedTask).then(this.fetchTasksList);
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(this.fetchTasksList);
  };

  handleTaskCreate = (text) => {
    createTask({
      text,
      done: false,
      createDate: new Date().toISOString(),
    }).then(this.fetchTasksList);
  };

  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={this.state.tasks}
            handleTaskStatusChange={this.handleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </div>
    );
  }
}

export default TodoList;
