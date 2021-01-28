import axios from 'axios'
const BASE_URL = 'https://www.fastmock.site/mock/ae8e9031947a302fed5f92425995aa19/jd/api/'
export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
      baseURL: BASE_URL,
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
