import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">swe-jobs.fyi!</a>
        </h1>

        <p className={styles.description}>Find recent jobs at one of the locations below</p>

        <div className={styles.grid}>
          <a href="/locations/SJ" className={styles.card}>
            <h2>San Jose, CA &rarr;</h2>
          </a>

          <a href="/locations/SF" className={styles.card}>
            <h2>San Francisco, CA &rarr;</h2>
          </a>

          <a href="/locations/SEA" className={styles.card}>
            <h2>Seattle, WA &rarr;</h2>
          </a>

          <a href="/locations/LA" className={styles.card}>
            <h2>Los Angeles, CA &rarr;</h2>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
