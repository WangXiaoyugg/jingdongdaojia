import axios from 'axios'

export function post (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data, {
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
