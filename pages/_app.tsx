import { AppProps } from 'next/app'
import { StyleProvider, ThemePicker } from 'vcc-ui'
import Head from 'next/head'
import React from 'react'
import '../public/css/styles.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Volvo digital car showroom</title>
      </Head>
      <React.StrictMode>
        <StyleProvider>
          <ThemePicker>
            <Component {...pageProps} />
          </ThemePicker>
        </StyleProvider>
      </React.StrictMode>
    </>
  )
}
