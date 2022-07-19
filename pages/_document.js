import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
      <link href="/assets/img/favicon-32x32.png" rel="icon" />
        <link href="/assets/img/apple-touch-icon.png" rel="apple-touch-icon" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}