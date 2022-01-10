import { Connectors } from 'web3-react';
const { InjectedConnector } = Connectors;
import { WalletConnectConnector } from '@web3-react/walletconnect-connector'

const walletconnect = new WalletConnectConnector({ rpc: { 1: '...' } })

import { URI_AVAILABLE } from '@web3-react/walletconnect-connector'

function Component () {
  useEffect(() => {
    walletconnect.on(URI_AVAILABLE, uri => {
      // ...
    })
  })
  // ...
}