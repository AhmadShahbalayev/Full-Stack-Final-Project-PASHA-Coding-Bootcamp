import { combineReducers } from 'redux';
import { LOADING, GET_COINS } from './actions';

const defaultStore = {
  coins: [],
  loading: false
}

const reducer = (store = defaultStore, action) => {
  switch(action.type) {
    case GET_COINS:
      return {
        ...store,
        coins: action.payload
      }
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
  reducer
});