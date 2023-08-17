const BASE_URL = 'https://api.movies.kurochkin.nomoreparties.co';

const getResponseData = (res) => {
  if (!res.ok) {
    return Promise.reject(res.status);
 } else {
    return res.json();
 }
};

export const createNewUser = (data) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    return getResponseData(res)
  })
};

export const login = (data) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  })
  .then((res) => {
    return getResponseData(res)
  })
}

export const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    return getResponseData(res)
  })
}

export const getMyMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  .then((res) => {
    return getResponseData(res)
  })
}


export const unlogin = () => {
  return fetch(`${BASE_URL}/signout`, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json'
    },
  })
  .then((res) => {
    return getResponseData(res)
  })
}