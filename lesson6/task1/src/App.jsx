import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Counter from './counter/Counter';

const App = () => (
  <Provider store={store}>
    <Counter />
  </Provider>
);
export default App;
