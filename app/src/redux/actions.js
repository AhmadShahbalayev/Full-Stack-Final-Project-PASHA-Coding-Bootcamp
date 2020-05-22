import history from '../history';

export const LOADING = 'LOADING';
export const GET_ALL_COINS = 'GET_ALL_COINS';
export const GET_COINS = 'GET_COINS';
export const ADMIN_CE = 'ADMIN_CE';
export const GET_COIN_BY_ID = 'GET_COIN_BY_ID';
export const LOGIN = 'LOGIN';
export const DELETE_COIN = 'DELETE_COIN';
export const UPDATE_COIN = 'UPDATE_COIN';
export const SEARCH_COIN = 'SEARCH_COIN';
export const LOGOUT = 'LOGOUT';

export const loading = () => { return { type: LOADING } }

// Get Coins:

export const getAllCoins = () => async dispatch => {
  await fetch(`/coins`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_ALL_COINS, payload: res }))
}

export const getCoins = (type) => async dispatch => {
  await fetch(`/catalog/${type}`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_COINS, payload: res }))
}

export const getCoinById = (id) => async dispatch => {
  await fetch(`/coins/${id}`)
    .then(res => res.json())
    .then(res => dispatch({ type: GET_COIN_BY_ID, payload: res }));
}

export const searchCoin = (value) => async dispatch => {
  await fetch(`/search?search=${value}`)
    .then(res => res.json())
    .then(res => dispatch({ type: SEARCH_COIN, payload: res }))
}

// Admin panel: 

export const login = (values) => async dispatch => {
  await fetch('/admin',
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res.json())
    .then(res => {
      const { status } = res;
      if (status) {
        localStorage.setItem('LoggedIn', true);
        history.push('/admin/panel');
      };

      dispatch({ type: LOGIN, payload: status })
    })
}

export const logout = () => {
  return {
    type: LOGOUT,
    payload: false
  }
}

const createFormData = (val) => {
  let formData = new FormData();
  formData.append('name', val.name);
  formData.append('value', val.value);
  formData.append('year', val.year);
  formData.append('price', val.price);
  formData.append('country', val.country);
  formData.append('metal', val.metal);
  formData.append('shortDescription', val.shortDescription);
  formData.append('fullDescription', val.fullDescription);
  formData.append('quality', val.quality);
  formData.append('weight', val.weight);
  formData.append('obverseLink', val.obverseLink[0])
  formData.append('reverseLink', val.reverseLink[0])
  formData.append('coinType', val.coinType);
  return formData;
}

export const createCoin = (values) => async dispatch => {
  await fetch('/coins', {
    method: 'POST',
    body: createFormData(values)
  }).then(res => res.json()).then(res => {
    dispatch({ type: ADMIN_CE, payload: res.data })
    history.push('/admin/panel');
  })
}

export const updateCoin = (values, id) => async dispatch => {
  await fetch(`/coins/${id}`,
    {
      method: 'PUT',
      body: createFormData(values),
    }
  ).then(res => {
    dispatch({ type: UPDATE_COIN, payload: { ...values, id} })
    history.push('/admin/panel')
  })
}

export const deleteCoin = (id) => async dispatch => {
  await fetch(`/delete-coin/${id}`, { method: 'DELETE' })
    .then(res => res.json());
  dispatch({ type: DELETE_COIN, payload: id })
}