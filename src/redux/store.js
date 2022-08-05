import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import place from './place';
const reducer = combineReducers({
  // here we will be adding reducers
  place: place
})
const store = configureStore({
  reducer,
})
export default store;