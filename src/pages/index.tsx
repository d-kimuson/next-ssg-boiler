import Head from "next/head"

import styles from "~/styles/modules/Home.module.scss"
import { Greet } from "~/components/Greet"
import { ClientSideRender } from "~/components/ClientSideRender"
import exampleSlice from "~/store/example"
import { useDispatch } from "~/hooks/store"
import { useUserName } from "~/hooks/store/example"

export default function Home(): JSX.Element {
  const userName = useUserName()
  const dispatch = useDispatch()

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <ClientSideRender>
          <Greet name={userName ?? ""} />
        </ClientSideRender>

        <Greet name={userName ?? ""} />

        <input
          type="text"
          placeholder="Input user name"
          value={userName ?? ""}
          onChange={(e) => {
            dispatch(exampleSlice.actions.setUserName(e.target.value))
          }}
        />

        <button
          onClick={() => {
            dispatch(exampleSlice.actions.resetUserName())
          }}
        >
          RESET
        </button>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{` `}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
