import getConfig from 'next/config';

import { createClient, chain, configureChains } from 'wagmi';
import { MetaMaskConnector } from 'wagmi/connectors/metaMask';
import { WalletConnectConnector } from 'wagmi/connectors/walletConnect';
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';
import { isMobile } from 'react-device-detect';

const { publicRuntimeConfig } = getConfig();

const { chains, provider, webSocketProvider } = configureChains(
  [chain.mainnet, chain.goerli],
  [
    alchemyProvider({ apiKey: publicRuntimeConfig.web3ProviderKey }),
    publicProvider(),
  ],
);

const client = createClient({
  autoConnect: true,
  connectors: isMobile
    ? [
        new WalletConnectConnector({
          chains,
          options: {
            qrcode: true,
            rpc: {
              1: publicRuntimeConfig.web3ProviderURL,
            },
          },
        }),
      ]
    : [new MetaMaskConnector({ chains })],
  provider,
  webSocketProvider,
});

export default client;
