import React from 'react';
import './Connect.css';
import { useSelector,useDispatch } from 'react-redux';
import {connectWallet} from '../Redux/WalletAction';
import { useMoralis,useNativeBalance  } from 'react-moralis';
import { useERC20Balances } from "react-moralis";


function Connect() {
    // const dispatch = useDispatch();
    // const walletConnect = useSelector(state => state.walletConnect);

// const connectHandler = async() => {
//     try {
//          dispatch(connectWallet());
//          console.log(connectWallet);
//     } catch (error) {
//         console.log(error);
//     }
// }

// const EnableWeb3 = ({user, score}) => {
//     const { web3, enableWeb3, isWeb3Enabled, isWeb3EnableLoading, web3EnableError } = useMoralis()
  
//     if(isWeb3Enabled){
//       return null
//     }
// }
const {authenticate ,isAuthenticated,logout,user,account,Moralis,web3, enableWeb3, isWeb3Enabled ,web3EnableError,isWeb3EnableLoading ,ErrorMessage} = useMoralis()


const { fetchERC20Balances, data, isLoading, isFetching, error } = useERC20Balances();




    return (
        <div>
            {web3EnableError && <ErrorMessage error={web3EnableError} />}
    <button onClick={() => enableWeb3({provider: 'walletconnect'})} disabled={isWeb3EnableLoading}>Enable web3</button>
    <div className="conector-modal">
        <div className="metamask">
        <button className='meta-btn' onClick={() => authenticate()}>Authenticate</button>
        </div>
        <div className="walletConnect">
        <button className='connect-btn' onClick={()=> authenticate({ provider: "walletconnect", chainId: 56 })}>Connect Wallet</button>
        </div>
        <div className="Torus">

        </div>
        <div className="portis"></div>
    </div>
    <div className="balance">
    {error && <>{JSON.stringify(error)}</>}
      
    <button onClick={() => fetchERC20Balances({ params: { chain: "0x1" } })}>Refetch</button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
    
            {/* <button className='connect-btn' onClick={() =>user()}>Connect</button> */}
        </div>
    )
}

export default Connect
