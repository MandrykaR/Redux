import store from './store';
import { addUser, removeUser } from './users.actions';

store.subscribe(() => {
  console.log('State changed:', store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(removeUser(76));
