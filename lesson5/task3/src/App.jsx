import React from 'react';
import { Provider } from 'react-redux';
import UserList from './users/UsersList';
import store from './store';

const App = () => {
  return (
    <Provider store={store}>
      <UserList />
    </Provider>
  );
};

export default App;
