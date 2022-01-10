import WalletConnectProvider from "@walletconnect/web3-provider";
import { providers } from "ethers";
//  Create WalletConnect Provider
const provider = new WalletConnectProvider({
    infuraId: "27e484dcd9e3efcfd25a83a78777cdf1",
  });
  
  //  Enable session (triggers QR Code modal)
  await provider.enable();

  //  Wrap with Web3Provider from ethers.js
const web3Provider = new providers.Web3Provider(provider);