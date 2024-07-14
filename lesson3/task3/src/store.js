import { combineReducers, createStore } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';
import usersReducer from './user.reducer';

export const appReducer = combineReducers({
  language: languageReducer,
  cart: cartReducer,
  user: usersReducer,
});

const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
