/* eslint-disable @next/next/no-sync-scripts */
import Document, { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="mn">
        <Head>
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta charSet="UTF-8" />
          <meta name="geo.placename" content="Ulaanbaatar" />
          <meta name="geo.region" content="MN" />
          {/* <link rel="icon" type="image/png" sizes="32x32" href={`${process.env.STATIC_ROOT}/img/logo-full.svg`} /> */}
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
            rel="stylesheet"
          ></link>
        </Head>
        <body className="w-full">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
