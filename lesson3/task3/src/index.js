import store from './store';

import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { setUser, removeUser } from './user.actions';
store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(setLanguage('en'));

store.dispatch(addProduct({ id: 1, name: 'Ann' }));
store.dispatch(addProduct({ id: 2, name: 'Ron' }));
store.dispatch(addProduct({ id: 3, name: 'Dob' }));
store.dispatch(removeProduct(2));

store.dispatch(setUser({ name: 'Roman' }));
store.dispatch(removeUser());
