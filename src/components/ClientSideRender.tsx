import { PersistGate } from "redux-persist/integration/react"

import { persistor } from "~/store"

type ClientSideRenderProps = React.PropsWithChildren<{
  loading?: React.ReactNode
}>

export const ClientSideRender: React.VFC<ClientSideRenderProps> = ({
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
