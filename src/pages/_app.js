import { SiteProvider } from '@context/siteContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <SiteProvider>
        <Component {...pageProps} />
      </SiteProvider>
    </>
  )
}

export default MyApp
