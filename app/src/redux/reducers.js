import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import {
  GET_ALL_COINS,
  GET_COINS_BY_TYPE,
  GET_COIN_BY_ID,
  LOGIN,
  DELETE_COIN,
  LOGOUT,
  UPDATE_COIN,
  SEARCH_AND_FILTER,
  GET_SELECT_VALUES,
  CHANGE_FOUND
} from './actions';

const defaultStore = {
  allCoins: [],
  coinsByTpye: [],
  coin: {},
  found: false,
  status: localStorage.getItem('LoggedIn'),
  countries: [],
  metals: [],
  qualities: []
}

const reducer = (store = defaultStore, action) => {
  switch (action.type) {
    case GET_ALL_COINS:
      return {
        ...store,
        allCoins: action.payload
      }
    case GET_COINS_BY_TYPE:
      return {
        ...store,
        coinsByTpye: action.payload
      }
    case GET_COIN_BY_ID:
      return {
        ...store,
        coin: action.payload
      }
    case DELETE_COIN:
      return {
        ...store,
        allCoins: store.allCoins.filter(item => +item.id !== +action.payload)
      }
    case SEARCH_AND_FILTER:
      if (action.payload) {
        return {
          ...store,
          allCoins: action.payload,
          coins: action.payload,
          found: true
        }
      } else {
        break;
      }
    case LOGIN:
      return {
        ...store,
        status: action.payload
      }
    case LOGOUT:
      return {
        ...store,
        status: action.payload
      }
    case UPDATE_COIN:
      let newCoins = store.allCoins.filter(coin => +coin.id !== action.payload.id);
      newCoins.push(action.payload)
      return {
        ...store,
        allCoins: newCoins
      }
    case GET_SELECT_VALUES:
      let countries = [];
      let metals = [];
      let qualities = [];
      action.payload.forEach(item => {
        countries.push(item.country);
        metals.push(item.metal);
        qualities.push(item.quality);
      })
      return {
        ...store,
        countries,
        metals,
        qualities
      }
    case CHANGE_FOUND:
      return{
        ...store,
        found: false
      }
    default:
      return store;
  }
}

export default combineReducers({
  reducer,
  form: formReducer,
});