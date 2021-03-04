import type { AppProps } from "next/app"
import { Provider } from "react-redux"

import "~/styles/globals/index.scss"
import { store } from "~/store"

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
