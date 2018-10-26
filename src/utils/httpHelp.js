import http from '../utils/http'
export function httpPost (url, contentType, dataType, data = {}) {
  return new Promise((resolve, reject) => {
    http({
      url: http.adornUrl(url),
      method: 'post',
      headers: {
        'Content-Type': contentType
      },
      data: http.adornData(data, dataType)
    })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

export function httpGet (url, data = {}) {
  return new Promise((resolve, reject) => {
    http({
      url: http.adornUrl(url),
      method: 'get',
      params: data
    })
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}
