import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './users/users.reducer';

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('new state', store.getState());
  console.groupEnd();
  return result;
};

const rootReducer = combineReducers({
  users: usersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(logger))
);

export default store;
