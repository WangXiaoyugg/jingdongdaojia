import axios from 'axios'
const BASE_URL = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/'
const instance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
})
export function get (url, params = {}) {
  return new Promise((resolve, reject) => {
    instance.get(url, params).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    instance.post(url, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(resp => {
      resolve(resp.data)
    }).catch(err => {
      reject(err)
    })
  })
}
