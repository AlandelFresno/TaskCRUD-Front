import '../globalStyle/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import { AuthProvider } from '../hooks/useAuth';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Head>
          <title>Trackmania</title>
          <meta name="description" content="Technical test" />
        </Head>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
