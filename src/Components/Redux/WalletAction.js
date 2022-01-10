// constants
import Web3 from "web3";
import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from "fortmatic";
import store from './store';


const connectRequest = () => {
  return {
    type: "CONNECTION_REQUEST",
  };
};

export const connectSuccess = (payload) => {
  return {
    type: "CONNECTION_SUCCESS",
    payload: payload,
  };
};

const connectFailed = (payload) => {
  return {
    type: "CONNECTION_FAILED",
    payload: payload,
  };
};

export const updateAccountRequest = (payload) => {
  return {
    type: "UPDATE_ADDRESS",
    payload: payload,
  };
};

const getProviderOptions = () => {
    const providerOptions = {
      walletconnect: {
        package: WalletConnectProvider,
        options: {
          infuraId: '58323542686f4d7a95573dba09b21bf3'
        }
      },

      fortmatic: {
        package: Fortmatic, // required
        options: {
          key: "pk_test_F3E84010E6D100A9" // required
        }
      }
    }
    return providerOptions;
}

export const connectWallet = () => {
    return async(dispatch) => {
        dispatch(connectRequest());
        try {
            const web3Modal = new Web3Modal({
                cacheProvider: true,
                providerOptions: getProviderOptions() // required
            });
    
            const provider = await web3Modal.connect();
         /*   const DoxaContractAddress = '0x2b75a2506C430dA8369031443Ec81689c41beAc2';
            const tokenAddress = '0x829e3b047d625007cf268C9292321d9b7CD126c4';
            const walletAddress = '0x387D79972DC4eBE46b6E4490125109f7B556655F';*/
    
            await subscribeProvider(provider, dispatch);
            
            const web3 = new Web3(provider);

            web3.eth.extend({
              methods: [
                {
                  name: "chainId",
                  call: "eth_chainId",
                  outputFormatter: web3.utils.hexToNumber
                }
              ]
            });
        
            const accounts = await web3.eth.getAccounts();
            const address = accounts[0];
        
          /*  const instance = new web3.eth.Contract(
              contract.output.abi,
              DoxaContractAddress
            );

            const tokenInstance = new web3.eth.Contract(
              tokencontract,
              tokenAddress
            );

            const walletInstance = new web3.eth.Contract(
              walletContract.output.abi,
              walletAddress
            );*/

            dispatch(
                connectSuccess({
                    address,
                    web3,
                    provider,
                    connected: true,
                    web3Modal
                })
            );
        } catch (e) {
            dispatch(connectFailed(e));
        }
    }
}

// const updateAccount = async(account) => {
//   return async (dispatch) => {
//     console.log(dispatch);
//   };
// };

const subscribeProvider = async(provider) => {
    if (!provider.on) {
      return;
    }

    provider.on("accountsChanged", async (accounts) => {
          //console.log(store);
          //console.log(accounts);
        store.dispatch(updateAccountRequest({ address: accounts[0] }));
        const skippyUser = localStorage.getItem("skippy-user");
        if(!skippyUser) {
          window.open(window.location.origin + "/", "_self")
          return;
        }
        const state = store.getState();
        // console.log(state.walletConnect);
        window.location.reload();
    });
}

