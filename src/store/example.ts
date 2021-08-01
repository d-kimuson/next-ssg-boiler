import { atom } from "recoil"

export type ExampleState = {
  userName: string | undefined
}

export const exampleState = atom<ExampleState>({
  key: "exampleState",
  default: {
    userName: undefined,
  },
})
