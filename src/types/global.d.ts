export {};

declare global {
  interface Window {
    ethereum: any;
    currentAccount: any;
  }
  interface Ethereum {
    selectedAddress: any;
  }
}
