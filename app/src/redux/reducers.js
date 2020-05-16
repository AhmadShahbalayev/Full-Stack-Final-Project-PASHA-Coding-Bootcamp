import { combineReducers } from 'redux';
import { LOADING } from './actions';

const defaultStore = {
  coins: [],
  loading: false
}

const loading = (store = defaultStore, action) => {
  switch(action.type) {
    case LOADING:
      return {
        ...store,
        loading: !store.loading
      }
    default:
      return store;
  }
}

export default combineReducers({
  loading
});