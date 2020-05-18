export const LOADING = 'LOADING';
export const GET_ALL_COINS = 'GET_ALL_COINS';
export const GET_COINS = 'GET_COINS';
export const ADMIN_CE = 'ADMIN_CE';
export const GET_COIN_BY_ID = 'GET_COIN_BY_ID';

export const loading = () => {
  return {
    type: LOADING
  }
}

export const getAllCoins = () => {
  return (func) => {
    func(loading());
    fetch(`http://localhost:5000/coins`)
      .then(res => res.json())
      .then(res => func({
        type: GET_ALL_COINS,
        payload: res
      }))
      .catch(err => console.log(err))
      .finally(func(loading()));
  }
}

export const getCoins = (type) => {
  return (func) => {
    func(loading());
    fetch(`http://localhost:5000/catalog/${type}`)
      .then(res => res.json())
      .then(res => func({
        type: GET_COINS,
        payload: res
      }))
      .catch(err => console.log(err))
      .finally(func(loading()));
  }
}

export const getCoinById = (id) => {
  return (func) => {
    func(loading());
    fetch(`http://localhost:5000/coins/${id}`)
      .then(res => res.json())
      .then(res => func({
        type: GET_COIN_BY_ID,
        payload: res
      }))
      .catch(err => console.log(err))
      .finally(func(loading()));
  }
}

export const adminCE = (values) => async func => {
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
  }).then(res =>  res.json());

  func({ type: ADMIN_CE, payload: response.data })
}