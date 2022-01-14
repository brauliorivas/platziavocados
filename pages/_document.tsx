import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  // incorporamos lo importante como favicons, js's, webfonts, styles, etc
  render() {
    return (
      <Html>
        <Head>
        </Head>
        <body className="my-body-class">
          <Main />
          <NextScript />
        </body>
        <script src="https://kit.fontawesome.com/36fbd12a0a.js" crossOrigin="anonymous"></script>
        <style jsx global>{`
        * {
          box-sizing: border-box;
          padding: 0px;
          margin: 0px;
        } 
        html {
          font-size: 62.5%;
          scroll-behavior: smooth;
          font-family: Lato, "Helvetica Neue", Arial, Helvetica, sans-serif;
        }
      `}</style>
      </Html>
    )
  }
}

export default MyDocument