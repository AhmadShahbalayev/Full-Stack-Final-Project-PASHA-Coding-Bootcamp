export const LOADING = 'LOADING';
export const GET_COINS = 'GET_COINS';

export const loading = () => {
  return {
    type: LOADING
  }
}

export const getCoins = (type) => {
  return (func) => {
    func(loading());
    fetch(`http://localhost:5000/${type}`)
    .then(res => res.json())
    .then(res => func({
      type: GET_COINS,
      payload: res
    }))
    .catch(err => console.log(err))
    .finally(func(loading()));
  }
}