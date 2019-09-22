import Document, {Head, Main, NextScript } from 'next/document';


export default class MyDocument extends Document{
  render(){
    return (
      <html>
        <Head>
          <style>{`body { background: #90BFFF }`}</style>
          <meta name="google-site-verification" content="dWb1EKCu6A883eSitZI7o2pjATZIHIKH9G1pWJXBbf0" />
        </Head>
          <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}