import store from './store';

import { addProduct } from './cart.actions';
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct());
