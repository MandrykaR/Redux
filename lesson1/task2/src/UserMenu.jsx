import React from 'react';
import { UserContext } from './user-context';

class UserMenu extends React.Component {
  render() {
    const userData = this.context;
    return (
      <div className="menu">
        <span className="menu__greeting">{userData.name}</span>
        <img
          alt="User Avatar"
          src={userData.avatar_url}
          className="menu__avatar"
        />
      </div>
    );
  }
}

UserMenu.contextType = UserContext;

export default UserMenu;
