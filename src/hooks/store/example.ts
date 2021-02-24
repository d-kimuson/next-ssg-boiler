import { useSelector } from "react-redux"

import type { RootState } from "~/store"

export const useUserName = (): string | undefined =>
  useSelector((state: RootState) => state.example.userName)
