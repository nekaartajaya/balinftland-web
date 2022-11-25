import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const replaceURI = (uri: string) => {
  return uri.replace('ipfs://', publicRuntimeConfig.ipfsURL);
};
