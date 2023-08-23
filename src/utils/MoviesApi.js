const BASE_URL = 'https://api.nomoreparties.co/beatfilm-movies';

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(res.status);
 } else {
    return res.json();
 }
};

export const getAllMovies = () => {
  return fetch(`${BASE_URL}`, {
    method: 'GET',
      headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    return getResponseData(res)
  })
}

