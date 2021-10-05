import Image from 'next/image'
import styles from '../../../styles/Home.module.css'
import Header from './header'
import HeadPage from './head'

export default function Master(props) {
  return (
    <div className={styles.container}>
      <HeadPage />
      <main className={styles.main}>
        <Header />
        <div>
    </div>
    {props.children}
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
