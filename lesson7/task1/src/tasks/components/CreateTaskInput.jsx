import React, { Component } from 'react';

class CreateTaskInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskText: '',
    };
  }

  handleChange = (e) => {
    this.setState({ taskText: e.target.value });
  };

  handleCreateTask = () => {
    const { taskText } = this.state;

    if (!taskText.trim()) {
      return;
    }

    this.props.onCreate(taskText);
    this.setState({ taskText: '' });
  };
  render() {
    return (
      <div className="create-task">
        <input
          className="create-task__input"
          type="text"
          value={this.state.taskText}
          onChange={this.handleChange}
        />
        <button
          className="btn create-task__btn"
          onClick={this.handleCreateTask}
        >
          Create
        </button>
      </div>
    );
  }
}

export default CreateTaskInput;
