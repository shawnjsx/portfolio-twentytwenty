import * as React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
}

const SEOHead = ({ title = 'Shawn Sheehan' }: Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="icon" href="favicon.ico" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
      <meta name="description" content="shawn sheehan web developer personal webspace 2020" />
      <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      <link rel="manifest" href="manifest.json" />
      <title>{title}</title>
    </Helmet>
  )
}

export default SEOHead
