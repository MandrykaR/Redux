import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { createTask, deleteTask, updateTask } from '../tasks.gateway.js';
import * as tasksAction from '../tasks.actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.getListTask();
  }

  handleTaskStatusChange = (id) => {
    const { tasks } = this.state;
    const task = tasks.find((task) => task.id === id);
    const updatedTask = {
      ...task,
      done: !task.done,
    };

    updateTask(id, updatedTask).then(this.fetchTaskList);
  };

  handleTaskDelete = (id) => {
    deleteTask(id).then(this.fetchTaskList);
  };

  handleTaskCreate = (text) => {
    createTask({
      text,
      done: false,
      createDate: new Date().toISOString(),
    }).then(this.fetchTaskList);
  };

  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.handleTaskCreate} />
          <TasksList
            tasks={[]}
            handleTaskStatusChange={this.handleTaskStatusChange}
            handleTaskDelete={this.handleTaskDelete}
          />
        </main>
      </div>
    );
  }
}

const mapDispatch = {
  getListTask: tasksAction.getListTask,
};

export default connect(null, mapDispatch)(TodoList);
