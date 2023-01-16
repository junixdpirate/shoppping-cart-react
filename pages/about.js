import Head from 'next/head'
import styles from '../styles/Home.module.css';

function Welcome(props) {
    return <h1 className={styles.title}>Welcome {props.name}!</h1>
}

export default function About() {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <Welcome name="Jhun" />
            </main>
        </div>
    )
  }