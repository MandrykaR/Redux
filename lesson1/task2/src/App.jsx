import React, { useState } from 'react';
import { UserContext } from './user-context';
import Header from './Header.jsx';

const App = () => {
  const [userData] = useState({
    name: 'Nikola Tesla',
    avatarUrl: 'https://avatars3.githubusercontent.com/u/10001',
  });
  return (
    <div className="page">
      <UserContext.Provider value={userData}>
        <Header />
      </UserContext.Provider>
    </div>
  );
};

export default App;
