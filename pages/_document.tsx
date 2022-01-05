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
        </Html>
      )
    }
  }
  
  export default MyDocument