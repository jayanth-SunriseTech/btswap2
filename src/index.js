import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import dotenv from 'dotenv';
import App from './App';
import { Provider } from 'react-redux';
import store from './Components/Redux/store';
import { MoralisProvider } from "react-moralis";
dotenv.config();

const AppId = 'fwIDUlEpIys2WDcmshbs4yVjgFHxql7cP2fk05Dg';
const Server_URI = 'https://mzuclzxegtx4.usemoralis.com:2053/server';

ReactDOM.render(
  <React.StrictMode>
    <MoralisProvider appId={AppId} serverUrl={Server_URI}>
    <Provider store={store}>
    <App />
    </Provider>
    </MoralisProvider>,
  </React.StrictMode>,
  document.getElementById('root')
);


