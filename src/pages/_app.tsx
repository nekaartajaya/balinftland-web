import '@styles/global.css';
import '@styles/navbar.css';
// import 'react-multi-carousel/lib/styles.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import type { AppProps } from 'next/app';
import client from '@helpers/connectors';
import { WagmiConfig } from 'wagmi';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Component {...pageProps} />
    </WagmiConfig>
  );
}
