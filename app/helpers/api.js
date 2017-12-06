import fetch from 'isomorphic-fetch'

export function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

export function parseJSON(response) {
  if (response.status === 204 || response.status === 205) {
    return null;
  }
  return response.json();
}

export function request(url, params) {
  return fetch(url, params)
    .then(checkStatus)
    .then(parseJSON)
}

export function encodeFormParams(params = {}) {
  let formParams = []

  Object.keys(params).map(param => {
    let encodedKey = encodeURIComponent(param)
    let encodedVal = encodeURIComponent(params[param])

    formParams.push(`${encodedKey}=${encodedVal}`)
  })

  return formParams.join('&')
}

export function getFormattedURI(baseURI, params) {
  return baseURI + encodeFormParams(params)
}
