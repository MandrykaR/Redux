import { createStore, combineReducers } from 'redux';
import { counterReducer } from './counter.reducer.js';
import userReducer from './users.reducer.js';

export const appReducer = combineReducers({
  counter: counterReducer,
  users: userReducer,
});

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
