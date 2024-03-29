import Head from "next/head"
import { useRecoilState } from "recoil"
import { ClientSideRender } from "~/components/ClientSideRender"
import { Greet } from "~/components/Greet"
import { exampleState } from "~/store/example"
import styles from "~/styles/modules/Home.module.scss"

const Home: React.VFC = () => {
  const [exampleValue, setExampleValue] = useRecoilState(exampleState)

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
          <Greet name={exampleValue.userName ?? ""} />
        </ClientSideRender>

        <Greet name={exampleValue.userName ?? ""} />

        <input
          type="text"
          placeholder="Input user name"
          value={exampleValue.userName ?? ""}
          onChange={(e) => {
            setExampleValue((prev) => ({ ...prev, userName: e.target.value }))
          }}
        />

        <button
          onClick={() => {
            setExampleValue((prev) => ({ ...prev, userName: undefined }))
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

export default Home
