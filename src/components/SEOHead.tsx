import * as React from 'react'
import { Helmet } from 'react-helmet'

interface Props {
  title?: string
}

const SEOHead = ({ title = 'Shawn Sheehan | Web Developer' }: Props) => {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="theme-color" content="#000000" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,900&display=swap"
        rel="stylesheet"
      ></link>
      <link
        href="https://fonts.googleapis.com/css?family=Cormorant+Garamond:400,600,700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  )
}

export default SEOHead
