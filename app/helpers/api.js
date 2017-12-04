export function checkStatus(response) {
  return response.join()
  .then((data) => {
    const { status } = response
    if (status >= 200 && status < 300) {
      return Promise.resolve(data)
    } else {
      return Promise.reject({ data, response })
    }
  })
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
