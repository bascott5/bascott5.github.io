//TODO put in layout nexting return <Component {...pageProps} />
import type { AppProps } from 'next/app'
import Layout from './src/components/layout'
import "./src/styling.scss"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
