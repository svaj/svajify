import { fetchPOST, fetchGET } from '../fetchApi';

export const STORAGE_TOKEN_KEY = 'token';

export const setToken = idToken => {
  localStorage.setItem(STORAGE_TOKEN_KEY, idToken);
};

export const getToken = () => {
  return localStorage.getItem(STORAGE_TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(STORAGE_TOKEN_KEY);
};

export const getTokenExpirationDate = encodedToken => {
  const date = new Date();

  return date;
};

export const isTokenExpired = token => {
  const expirationDate = getTokenExpirationDate(token);
  return expirationDate < new Date();
};

export const login = (url, params) => {
  return fetchPOST(url, params).then(res => {
    setToken(res.jwt);
    return Promise.resolve(res);
  });
};

export const refreshToken = url => {
  return fetchGET(url)
    .then(res => {
      setToken(res.token);
      return Promise.resolve(res);
    })
    .catch(() => {
      removeToken();
    });
};

export const loggedIn = () => {
  return true;
  const token = getToken();
  return !!token && !isTokenExpired(token);
};

export const logout = () => {
  removeToken();
};

export const getAuthHeader = headers => {
  const token = getToken();

  return loggedIn()
    ? {
        ...headers,
        authorization: `Bearer ${token}`
      }
    : headers;
};

export const getUserId = () => {
  const encodedToken = getToken();

  if (encodedToken) {
    // const token = decode(encodedToken);
    return 'asb';
    // return token.customerId || null;
  } else {
    return null;
  }
};
