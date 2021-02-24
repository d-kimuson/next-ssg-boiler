import type { PropsWithChildren } from "react"
import { PersistGate } from "redux-persist/integration/react"

import { persistor } from "~/store"

type ClientSideRenderProps = PropsWithChildren<{
  loading?: React.ReactNode
}>

export const ClientSideRender: React.FC<ClientSideRenderProps> = ({
  children,
  loading = null,
}: ClientSideRenderProps) => {
  // このコンポーネント以下のレンダリングをクライアントで行う
  return (
    <PersistGate loading={loading} persistor={persistor}>
      {children}
    </PersistGate>
  )
}
