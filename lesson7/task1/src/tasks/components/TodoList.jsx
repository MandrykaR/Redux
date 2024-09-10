import React, { Component, useState } from 'react';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { getTaskList } from '../tasks.gateway';

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

  

  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput />
          <TasksList />
        </main>
      </div>
    );
  }
}

export default TodoList;
