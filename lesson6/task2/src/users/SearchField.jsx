import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getUserData } from './users.gateway';

import * as usersActions from './users.actions';

class SearchField extends Component {
  state = {
    userName: '',
  };

  onChange = (e) => {
    this.setState({ userName: e.target.value });
  };

  handleUserSearch = () => {
    this.props.showSpinner();
    getUserData(this.state.userName).then((userData) => {
      this.props.userDataReceived(userData);
    });
  };

  render() {
    return (
      <div className="name-form">
        <input
          type="text"
          className="name-form__input"
          value={this.state.userName}
          onChange={this.onChange}
        />
        <button className="name-form__btn btn" onClick={this.handleUserSearch}>
          Show
        </button>
      </div>
    );
  }
}

const mapDispatch = {
  showSpinner: usersActions.showSpinner,
  userDataReceived: usersActions.userDataReceived,
};

export default connect(null, mapDispatch)(SearchField);
