import { combineReducers } from "redux"
import type { EnhancedStore } from "@reduxjs/toolkit"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

const preloadedState = (): RootState => {
  return {}
}

const createStore = (): EnhancedStore<RootState> => {
  const middlewareList = [...getDefaultMiddleware(), logger]

  return configureStore({
    reducer: rootReducer,
    middleware: middlewareList,
    devTools: process.env.NODE_ENV !== "production",
    preloadedState: preloadedState(),
  })
}

export default createStore
