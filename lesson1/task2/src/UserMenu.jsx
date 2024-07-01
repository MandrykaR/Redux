import React, { Component } from 'react';
import { UserContext } from './user-context';

class UserMenu extends Component {
  render() {
    const userData = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">{userData.name}</span>
        <img
          alt="User Avatar"
          src={userData.avatarUrl}
          className="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
