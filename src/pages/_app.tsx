import Head from "next/head"
import { RecoilRoot } from "recoil"
import type { AppProps } from "next/app"

import "~/styles/globals/index.scss"

const MyApp: React.VFC<AppProps> = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  )
}

export default MyApp
