import Head from 'next/head'
import { Form } from '../components/Form';


import styles from '../styles/pages/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Início | Login</title>
      </Head>
      <Form />
      <section>
        <div>

        </div>
      </section>
    </div>
  )
}
