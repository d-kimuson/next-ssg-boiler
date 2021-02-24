import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export type ExampleState = {
  userName: string | undefined
}

export const initialState: ExampleState = {
  userName: undefined,
}

const exampleSlice = createSlice({
  name: "example",
  initialState,
  reducers: {
    setUserName: (state, { payload }: PayloadAction<string>) => {
      state.userName = payload
    },
    resetUserName: (state) => {
      state.userName = undefined
    },
  },
})

export default exampleSlice
