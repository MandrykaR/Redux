import store from './store';
import { addUser, deleteUser } from './users.actions';

store.subscribe(() => {
  console.log('State changed:', store.getState());
});

store.dispatch(addUser({ id: 76, name: 'Sarah' }));
store.dispatch(deleteUser(76));
