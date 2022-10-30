import '../styles/globals.scss'

import type { AppProps } from 'next/app'
import { CityTabGroup } from '../components/Tabs'
import { Footer } from '../components/Footer'
import { NavBar } from '../components/NavBar'
import { logAnalyticsEvent } from '../utils/firebase'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }: AppProps) {
  const currentPath = useRouter().asPath
  useEffect(() => {
    console.log('user app loaded')
    if (process.env.NODE_ENV === 'production') {
      logAnalyticsEvent('user app loaded')
    }
  }, [])

  return (
    <>
      <NavBar />
      {['trends', 'stats', 'jobs'].includes(currentPath.split('/')[1]) && (
        <CityTabGroup currentPath={currentPath} />
      )}
      <div className="mx-auto min-h-[calc(100vh-300px)] max-w-5xl px-4 py-4 sm:min-h-[calc(100vh-400px)] sm:px-12 lg:px-5">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  )
}

export default MyApp
