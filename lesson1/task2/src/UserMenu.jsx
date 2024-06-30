import React, { useContext } from 'react';
import { UserContext } from './user-context';

const UserMenu = () => {
  const userData = useContext(UserContext);
  console.log(userData);

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
};

UserMenu.contextType = UserContext;

export default UserMenu;
