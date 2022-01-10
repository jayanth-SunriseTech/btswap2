import React from "react";
import HelpIcon from "../HelpIcon/HelpIcon";
import "./TradeExchange.css";
import { Link } from "react-router-dom";
import ButtonGroup from "../TradeLiquidityBtn/ButtonGroup";
import Connect from "../Connect/Connect";

function TradeExchange() {
  return (
    <div className="trade__exchange_page">
      {/* <div className="title__btns">
        <span className="exc-btn">Exchange</span>
        <hr className="btn_border"></hr>
        <Link to='/liquidity' className="link">
        <span className="liq-btn">Liquidity</span>
        </Link>
        <hr className="btn_border"></hr>
      </div> */}
      <ButtonGroup />
      <div className="container">
      <div className="trade-ex row">
        <div className="col-md-6 col-sm-6">
          <div className="graph container-sm">
            <div className="graph_box_header">
              <img className="inp__icon__1" src="bootomlogo.svg"></img>
              <img className="inp__icon__1" src="bootomlogo.svg"></img>
              <span className="graph_header_title">BNB/BTswap</span>
              <img src="side-exchange.svg" className="graph-exchange" />
              <button className="graph_viewOption_active">Basic</button>
              <button className="graph_viewOption">TradingView</button>
              <span className="expand">
                <i class="fas fa-expand-alt"></i>
              </span>
            </div>
            <div className="graph_box_price_date row ml-2 mt-5 ">
              <div className="graphbox_price col-8">
                <div className="btc">
                  <h2 className="btc-price">41.23</h2>
                  <span className="btc-name">BNB/BTswap</span>
                  <span className="btc-status">-1.000 (-3.31%) </span>
                </div>
                <p className="date">Dec 24 2021 02.58 pm </p>
              </div>
              <div className="graphbox_date col-4">
                <div className=" align-self-center range-picker">
                  <div className=" text-center col-3">
                    <button className="hours">24 h</button>
                  </div>
                  <div className="text-center col-3">
                    <button className="weeks">50 w</button>
                  </div>
                  <div className=" text-center col-3">
                    <button className="months">12 m</button>
                  </div>
                  <div className=" text-center col-3">
                    <button className="years">24 y</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-6">
          <div className="buy">
            <div className="buy__navbar">
              <div className="nav__one col-2">
                <img src="Network.svg" className="net" />
              </div>
              <div className="nav__two col-6">
                <span className="nav__title">BT Swap</span>
              </div>
              <div className="nav__three col-4">
                <span className="nav__settings">
                  <i class="fas fa-cog"></i>
                </span>
                <span className="nav__time">
                  <i class="far fa-clock"></i>
                </span>
              </div>
            </div>
            <span className="buy__tagline">Trade tokens in an instant</span>
            <hr className="buy__line"></hr>
            <div className="trade__input">
              <div className="icon__title">
                <img className="inp__icon__1" src="bootomlogo.svg"></img>
                <span className="inp__title__1">BT Swap</span>
                <span className="inp__choose__1">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </div>
              <input className="inp__1" type="text" placeholder="0.00" />
            </div>
            <div className="ex-icon">
              <img src="exchangecoin.svg" className="exchange-icon" />
            </div>
            <div className="trade__input__2">
              <div className="icon__title">
                <img className="inp__icon__1" src="bootomlogo.svg"></img>
                <span className="inp__title__1">BNB</span>
                <span className="inp__choose__1">
                  <i class="fas fa-chevron-down"></i>
                </span>
              </div>
              <input className="inp__1" type="text" placeholder="0.00" />
            </div>
            <button className="trade__wallet">CONNECT WALLET</button>
            <Connect/>
          </div>
        </div>
      </div>
      </div>
      <HelpIcon />
    </div>
  );
}

export default TradeExchange;
