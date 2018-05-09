import { getAuthHeader } from '../security';

const baseApiUrl = process.env.REACT_APP_BASE_API_URL || '';

export const DEFAULT_HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json'
};

export class ApiError extends Error {
  constructor(message, code, error) {
    super(message || 'Error');
    this.code = code;
    this.error = error;
  }
}

export const checkResponse = response => {
  if (response.status >= 200 && response.status < 300) {
    return response.json();
  } else {
    const rawData = response.text();
    try {
      const data = JSON.parse(rawData);
      throw new ApiError(data.message, data.code, data.error);
    } catch (e) {
      // incase we don't get json from an error.
      throw new ApiError(rawData, response.status);
    }
  }
};

export const customFetch = (url, options) => {
  return fetch(baseApiUrl + url, {
    headers: getAuthHeader(DEFAULT_HEADERS),
    ...options
  }).then(checkResponse);
};

export const fetchPOSTFile = (url, options) => {
  const headers = {
    ...getAuthHeader(DEFAULT_HEADERS)
  };
  delete headers['Content-Type'];
  return fetch(baseApiUrl + url, {
    method: 'POST',
    headers,
    ...options
  }).then(checkResponse);
};

export const fetchGET = url => customFetch(url, { method: 'GET' });

export const fetchPOST = (url, params) =>
  customFetch(url, { method: 'POST', body: JSON.stringify(params) });

export const fetchPUT = (url, params) =>
  customFetch(url, { method: 'PUT', body: JSON.stringify(params) });

export const fetchDELETE = url => customFetch(url, { method: 'DELETE' });
