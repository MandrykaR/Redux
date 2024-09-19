import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateTaskInput from './CreateTaskInput';
import TasksList from './TasksList';
import { sortedTaskListSelector } from '../tasks.selectors.js';
import * as tasksAction from '../tasks.actions';

class TodoList extends Component {
  componentDidMount() {
    this.props.getListTask();
  }

  render() {
    return (
      <div id="root">
        <h1 className="title">Todo List</h1>
        <main className="todo-list">
          <CreateTaskInput onCreate={this.props.createTask} />
          <TasksList
            tasks={this.props.tasks}
            handleTaskStatusChange={this.props.updateTask}
            handleTaskDelete={this.props.deleteTask}
          />
        </main>
      </div>
    );
  }
}

const mapDispatch = {
  getListTask: tasksAction.getListTask,
  updateTask: tasksAction.updateTask,
  deleteTask: tasksAction.deleteTask,
  createTask: tasksAction.createTask,
};

const mapState = (state) => {
  return {
    tasks: sortedTaskListSelector(state),
  };
};

export default connect(mapState, mapDispatch)(TodoList);
