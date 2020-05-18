import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOADING, GET_ALL_COINS, GET_COINS, GET_COIN_BY_ID } from './actions';

const defaultStore = {
  allCoins: [],
  coins: [],
  loading: false,
  coin: {}
}

const reducer = (store = defaultStore, action) => {
  switch(action.type) {
    case GET_ALL_COINS:
    return {
      ...store,
      allCoins: action.payload
    }
    case GET_COINS:
      return {
        ...store,
        coins: action.payload
      }
    case GET_COIN_BY_ID:
      return {
        ...store,
        coin: action.payload
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
  reducer,
  form: formReducer
});