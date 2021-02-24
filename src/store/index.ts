import { combineReducers } from "redux"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"

import exampleSlice, { initialState as exampleState } from "./example"

const rootReducer = combineReducers({
  example: exampleSlice.reducer,
})
export type RootState = ReturnType<typeof rootReducer>

const preloadedState = (): RootState => {
  return {
    example: exampleState,
  }
}

export const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), logger],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: preloadedState(),
})

export type AppDispatch = typeof store.dispatch
