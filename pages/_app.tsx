import { AppProps } from 'next/app';
import Layout from '@components/Layout/Layout';
import '../global.css';
import useCart from '../hooks/useCart';
import CartContext from '../context/CartContext';

function MyApp({ Component, pageProps }: AppProps) {
  const cart = useCart();
  // usar myapp para context, providers, theme, etc
  // layout comun para todas las paginas
  // props adicionales
  return (
    <CartContext.Provider value={cart}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </CartContext.Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp