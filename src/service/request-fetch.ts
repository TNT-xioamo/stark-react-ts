import { BASE_URL, TIMEOUT } from './config'


const token = ''

/**
 * 让fetch也可以timeout
 *  timeout不是请求连接超时的含义，它表示请求的response时间，包括请求的连接、服务器处理及服务器响应回来的时间
 * fetch的timeout即使超时发生了，本次请求也不会被abort丢弃掉，它在后台仍然会发送到服务器端，只是本次请求的响应内容被丢弃而已
 * @param {Promise} fetch_promise    fetch请求返回的Promise
 * @param {number} [timeout=10000]   单位：毫秒，这里设置默认超时时间为10秒
 * @return 返回Promise
 */
export function timeout_fetch(fetch_promise: Promise<any>, timeout: number = TIMEOUT) {
  let timeout_fn: (() => void) | null = null
  // 这是一个可以被reject的promise
  let timeout_promise = new Promise(function(resolve, reject) {
    timeout_fn = function() {
      reject('timeout promise')
    }
  })

  // 这里使用Promise.race，以最快 resolve 或 reject 的结果来传入后续绑定的回调
  const absorbable_promise = Promise.race([
    fetch_promise,
    timeout_promise
  ])
  setTimeout(function() {
    timeout_fn && timeout_fn()
  }, timeout)

  return absorbable_promise
}

/**
 * @param {string} url 接口地址
 * @param {string} method 请求方法：GET、POST，只能大写
 * @param {JSON} [params=''] body的请求参数，默认为空
 * @return 返回Promise
 */

export function fetchRequest(url: string, method: string = 'GET', params:any = '', config: object) {
  const header = {
    "Content-Type": 'application/json;charset=UTF-8',
    "accessToken": token,
    ...config
  }
  console.log('request url:', url, params)
  if(params === '') {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/${url}`, {
        method: method,
        headers: header
      }).then(response => response.json()).then(responseData => {
        console.log('res:',url, responseData)
        resolve(responseData)
      }).catch(err => {
        console.log('err:',url, err)
        reject(err)
      })
    })
  } else {
    return new Promise((resolve, reject) => {
      fetch(`${BASE_URL}/${url}`, {
        method: method,
        headers: header,
        body: JSON.stringify(params)
      }).then(response => response.json()).then(responseData => {
        resolve(responseData)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
