import '@styles/global.css';
import '@styles/navbar.css';
import 'react-multi-carousel/lib/styles.css';
import type {AppProps} from 'next/app';

export default function MyApp({Component, pageProps}: AppProps) {
  return <Component {...pageProps} />;
}
