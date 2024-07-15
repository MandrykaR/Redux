// store.js
import { createStore, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
