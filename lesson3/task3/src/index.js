import store from './store';

import { setLanguage } from './language.actions';
import { addProduct } from './cart.actions';
import { setUser } from './user.actions';

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addProduct());
store.dispatch(setLanguage('pl'));
store.dispatch(setUser({ name: 'Non' }));
