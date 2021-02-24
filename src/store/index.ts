import { combineReducers } from "redux"
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import logger from "redux-logger"
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"

import exampleSlice, { initialState as exampleState } from "./example"

const rootReducer = combineReducers({
  example: exampleSlice.reducer,
})
export type RootState = ReturnType<typeof rootReducer>

const persistedReducer = persistReducer(
  {
    key: "root",
    storage,
    whitelist: ["example"],
  },
  rootReducer
)

const initialState = (): RootState => {
  return {
    example: exampleState,
  }
}

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [
    ...getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
    logger,
  ],
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState(),
})

export const persistor = persistStore(store)

export type AppDispatch = typeof store.dispatch
