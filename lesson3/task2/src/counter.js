// src/counter.js

import { createStore } from 'redux';

// Типы действий
export const INCREMENT = 'COUNTER/INCREMENT';
export const DECREMENT = 'COUNTER/DECREMENT';

// Action creators
export const increment = () => ({
  type: INCREMENT,
});

export const decrement = () => ({
  type: DECREMENT,
});

// Редуктор
export const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

// Создание store с подключением Redux DevTools
export const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
