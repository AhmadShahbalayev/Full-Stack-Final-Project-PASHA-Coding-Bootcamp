import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { LOADING, GET_ALL_COINS, GET_COINS, GET_COIN_BY_ID, LOGIN, DELETE_COIN, SEARCH_COIN } from './actions';

const defaultStore = {
  allCoins: [],
  coins: [],
  loading: false,
  coin: {},
  found: false
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
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
    case DELETE_COIN:
      return {
        ...store,
        allCoins: store.allCoins.filter(item => item.id !== action.payload)
      }
    case SEARCH_COIN:
      if (action.payload) {
        return {
          ...store,
          allCoins: action.payload,
          coins: action.payload,
          found: true
        }
      }
    default:
      return store;
  }
}

const loginReducer = (store = { status: localStorage.getItem('LoggedIn') }, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        status: action.payload
      };
    default:
      return store;
  }
}

export default combineReducers({
  reducer,
  form: formReducer,
  loginReducer
});