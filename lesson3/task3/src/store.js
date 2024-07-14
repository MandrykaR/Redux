import { combineReducers, createStore } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';
import usersReducer from './user.reducer';

export const appReducer = combineReducers({
  language: languageReducer,
  user: usersReducer,
  cart: cartReducer,
});

const initialState = {
  language: 'en',
  user: null,
  cart: {
    products: [],
  },
};

const store = createStore(
  appReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
