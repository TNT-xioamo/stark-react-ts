import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk'
import StingReducer from './reducers/settings'
import { SETTING_FEATURE_KEY } from './store-type'

import { persistReducer } from 'redux-persist'

import storageSession from 'redux-persist/lib/storage/session' // sessionStorage机制

const persistConfig = {
  key: 'root',
  storage: storageSession, // storageSession, // 
  // blacklist: ['userInfo'], // 只有 userInfo 不会被存在缓存
  // whitelist: ['userInfo'] // 只有 userInfo 会被存在缓存
}


const reducers = combineReducers({
  [SETTING_FEATURE_KEY]: StingReducer,
})


const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: [thunk],
})

export default store

// export default configureStore({
//   reducer: {
//     [SETTING_FEATURE_KEY]: StingReducer,
//   },
//   devTools: process.env.NODE_ENV !== 'production',
// })