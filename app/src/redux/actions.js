import history from '../history';

export const LOADING = 'LOADING';
export const GET_ALL_COINS = 'GET_ALL_COINS';
export const GET_COINS = 'GET_COINS';
export const ADMIN_CE = 'ADMIN_CE';
export const GET_COIN_BY_ID = 'GET_COIN_BY_ID';
export const LOGIN = 'LOGIN';
export const DELETE_COIN = 'DELETE_COIN';

export const loading = () => {
  return {
    type: LOADING
  }
}

export const getAllCoins = () => {
  return (dispatch) => {
    dispatch(loading());
    fetch(`http://localhost:5000/coins`)
      .then(res => res.json())
      .then(res => dispatch({
        type: GET_ALL_COINS,
        payload: res
      }))
      .catch(err => console.log(err))
      .finally(dispatch(loading()));
  }
}

export const getCoins = (type) => {
  return (dispatch) => {
    dispatch(loading());
    fetch(`http://localhost:5000/catalog/${type}`)
      .then(res => res.json())
      .then(res => dispatch({
        type: GET_COINS,
        payload: res
      }))
      .catch(err => console.log(err))
      .finally(dispatch(loading()));
  }
}

export const getCoinById = (id) => {
  return (dispatch) => {
    dispatch(loading());
    fetch(`http://localhost:5000/coins/${id}`)
      .then(res => res.json())
      .then(res => dispatch({
        type: GET_COIN_BY_ID,
        payload: res
      }))
      .catch(err => console.log(err))
      .finally(dispatch(loading()));
  }
}

export const createCoin = (values) => async dispatch => {
  let formData = new FormData();
  formData.append('name', values.name);
  formData.append('value', values.value);
  formData.append('year', values.year);
  formData.append('price', values.price);
  formData.append('country', values.country);
  formData.append('metal', values.metal);
  formData.append('shortDescription', values.shortDescription);
  formData.append('fullDescription', values.fullDescription);
  formData.append('quality', values.quality);
  formData.append('weight', values.weight);
  formData.append('obverseLink', values.obverseLink[0]);
  formData.append('reverseLink', values.reverseLink[0]);
  formData.append('coinType', values.coinType);
  const response = await fetch('http://localhost:5000/coins', {
    method: 'POST',
    body: formData
  }).then(res => res.json());

  dispatch({ type: ADMIN_CE, payload: response.data })
  history.push('/admin/panel');
}

export const login = (values) => async dispatch => {
  const response = await fetch(
    'http://localhost:5000/admin',
    {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res.json());

  const { status } = response;
  if (status) {
    localStorage.setItem('LoggedIn', true);
    history.push('/admin/panel');
  };

  dispatch({ type: LOGIN, payload: status })
}

export const updateCoin = (values, id) => async dispatch => {
  let formData = new FormData();
  formData.append('name', values.name);
  formData.append('value', values.value);
  formData.append('year', values.year);
  formData.append('price', values.price);
  formData.append('country', values.country);
  formData.append('metal', values.metal);
  formData.append('shortDescription', values.shortDescription);
  formData.append('fullDescription', values.fullDescription);
  formData.append('quality', values.quality);
  formData.append('weight', values.weight);
  formData.append('obverseLink', values.obverseLink[0]);
  formData.append('reverseLink', values.reverseLink[0]);
  formData.append('coinType', values.coinType);
  const res = await fetch(
    `http://localhost:5000/coins/${id}`,
    {
      method: 'PUT',
      body: formData,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  ).then(res => res.json());
  history.push('/admin/panel');
}

export const deleteCoin = (id) => async dispatch => {
  await fetch(`http://localhost:5000/delete-coin/${id}`, { method: 'DELETE' })
  .then(res => res.json());
  dispatch({ type: DELETE_COIN, payload: id })
}