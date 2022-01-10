import type { NextPage } from 'next'
import Link from 'next/link';
import styles from '@/components/StartPage/StartPage.module.scss'

const StartPage: NextPage = () => {
  return (
    <>
      <h1 className={styles.title}>Welcome to Project!</h1>
      <h3 className={styles.content}>start project, please press this Link</h3>
        <p className={styles.start}>
          <Link href="/top">
              <a>start</a>
          </Link>
        </p>
    </>
  )
};

export default StartPage;