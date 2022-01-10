import React, {useState} from 'react'
import "./Navbar.css";
import {Link} from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {connectWallet} from '../Redux/WalletAction';

function Navbar() {
   const dispatch = useDispatch();
  const walletConnect = useSelector(state => state.walletConnect);

// const {loading, walletDetails, error} = walletConnect;
console.log(walletConnect);
  const connectWalletHandler = async () => {
    dispatch(connectWallet());
    console.log(walletConnect);
  }

  //MikeC Metamask Wallet Connection//

  // const [errorMessage, setErrorMessage] = useState(null);
	// const [defaultAccount, setDefaultAccount] = useState(null);
	// const [userBalance, setUserBalance] = useState(null);
	// const [connButtonText, setConnButtonText] = useState('Connect Wallet');

	// const connectWalletHandler = () => {
	// 	if (window.ethereum && window.ethereum.isMetaMask) {
	// 		console.log('MetaMask Here!');

	// 		window.ethereum.request({ method: 'eth_requestAccounts'})
	// 		.then(result => {
	// 			accountChangedHandler(result[0]);
	// 			setConnButtonText('Wallet Connected');
	// 			getAccountBalance(result[0]);
  //       console.log(result);
	// 		})
      
	// 		.catch(error => {
	// 			setErrorMessage(error.message);
			
	// 		});

	// 	} else {
	// 		console.log('Need to install MetaMask');
	// 		setErrorMessage('Please install MetaMask browser extension to interact');
	// 	}
	// }

	// // update account, will cause component re-render
	// const accountChangedHandler = (newAccount) => {
	// 	setDefaultAccount(newAccount);
	// 	getAccountBalance(newAccount.toString());
	// }

	// const getAccountBalance = (account) => {
	// 	window.ethereum.request({method: 'eth_getBalance', params: [account, 'latest']})
	// 	.then(balance => {
	// 		setUserBalance(ethers.utils.formatEther(balance));
	// 	})
	// 	.catch(error => {
	// 		setErrorMessage(error.message);
	// 	});
	// };

	// const chainChangedHandler = () => {
	// 	// reload the page to avoid any errors with chain change mid use of application
	// 	window.location.reload();
	// }


	// // listen for account changes
	// window.ethereum.on('accountsChanged', accountChangedHandler);

	// window.ethereum.on('chainChanged', chainChangedHandler);
  return (
    <div className="navPage">
      <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">
          <img src="Logo.png" className="logo"></img>
          <span className="brand-name">BT Swap</span>
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto nav-list">
          <Link exact to='/trade' className="navlink">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Trade
              </a>
            </li>
            </Link>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Earn
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Win
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                NFT
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <i class="fas fa-ellipsis-h"></i>
              </a>
            </li>
          </ul>
          <div className="nav-right">
            <img src="Logo-right.png" className="logo-right"></img>
            <span className="balance">12</span>

            <img src="World.svg" className="world"></img>
            <span className="settings">
              <i class="fas fa-cog"></i>
            </span>

            <button onClick={connectWalletHandler} className="wallet">Connect Wallet</button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
