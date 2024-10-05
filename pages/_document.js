import { Html, Head, Main, NextScript } from 'next/document'
import { Children } from 'react'

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <Head>
        <meta
          name="description"
          content="Welcome to the official website of GDSC ABESIT, where you can find all things GDSC, and keep yourself upadted on the latest happenings from the most happening club around!">
        </meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
