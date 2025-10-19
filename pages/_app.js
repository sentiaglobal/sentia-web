import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Sentía Global</title>
        <meta property="og:title" content="Sentía Global" />
        <meta property="og:description" content="Transforma tu productividad con IA y Sentía" />
        <meta property="og:image" content="/og-image.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:url" content="https://sentiaglobal.com" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
