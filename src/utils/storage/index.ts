import { createStorage } from './storage'

const prefixKey: String = 'Stark'

export const createLocalStorage = function (option: any = {}) {
  return createStorage({
    prefixKey: option?.prefixKey ?? '',
    storage: localStorage,
  })
}

export const createSessionStorage = function (option:any = {}) {
  return createStorage({
    prefixKey: option?.prefixKey ?? '',
    storage: sessionStorage,
  })
}

export const lStorage = createLocalStorage({ prefixKey })

export const sStorage = createSessionStorage({ prefixKey })