import store from './store';

import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct());
store.dispatch(setLanguage('pl'));
