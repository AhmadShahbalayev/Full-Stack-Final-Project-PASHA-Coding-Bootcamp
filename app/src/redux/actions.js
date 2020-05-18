export const LOADING = 'LOADING';
export const GET_COINS = 'GET_COINS';
export const ADMIN_CE = 'ADMIN_CE';
export const GET_COIN_BY_ID = 'GET_COIN_BY_ID';

export const loading = () => {
  return {
    type: LOADING
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

export const adminCE = (values) => {
  return (func) => {
    fetch('http://localhost:5000/coins', {
      method: 'POST',
      body: JSON.stringify({
        name: values.name,
        value: values.value,
        year: values.year,
        price: values.price,
        country: values.country,
        metal: values.metal,
        shortDescription: values.shortDescription,
        fullDescription: values.fullDescription,
        quality: values.quality,
        weight: values.weight,
        coinType: values.coinType
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
        func({
          type: ADMIN_CE,
          payload: res
        })
      })
  }
}