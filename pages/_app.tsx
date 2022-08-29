import '../globalStyle/globals.css';
import type { AppProps } from 'next/app';
import { store } from '../store';
import { Provider } from 'react-redux';
import { AuthProvider } from '../hooks/useAuth';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </Provider>
  );
}

export default MyApp;
