/** @type {import('next').NextConfig} */

const {
  NEXT_PUBLIC_AUTH_URL,
  NEXT_PUBLIC_API_URL,
  NEXT_PUBLIC_WEB3_PROVIDER_URL,
  NEXT_PUBLIC_WEB3_PROVIDER_KEY,
  NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS,
  NEXT_PUBLIC_USDC_CONTRACT_ADDRESS,
  NEXT_PUBLIC_CHAIN_ID,
} = process.env;

const nextConfig = {
  compiler: {
    emotion: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  reactStrictMode: true,
  publicRuntimeConfig: {
    apiURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:3000',
    web3ProviderKey: process.env.NEXT_PUBLIC_WEB3_PROVIDER_KEY,
    web3ProviderURL: process.env.NEXT_PUBLIC_WEB3_PROVIDER_URL,
    lbsfContractAddress: process.env.NEXT_PUBLIC_LBSF_CONTRACT_ADDRESS,
    usdcContractAddress: process.env.NEXT_PUBLIC_USDC_CONTRACT_ADDRESS,
    chainId: process.env.NEXT_PUBLIC_CHAIN_ID,
  },
};

module.exports = nextConfig;
