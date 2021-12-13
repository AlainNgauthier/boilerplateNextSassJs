// import 'styles/globals.css'
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Programa de Estudantes Convênio de Graduação</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092B" />
      </Head>
      <Component {...pageProps} />
    </>
    )}

export default MyApp
