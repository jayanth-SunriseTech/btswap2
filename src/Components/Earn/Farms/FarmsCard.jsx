import React, { useState } from "react";
import "bootstrap/js/src/collapse.js";
import "./FarmsCard.css";

function FarmsCard() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="card farm__card">
        <div className="farm__card__header">
          <img src="BNB.svg" className="bnb-coin" />
          <div className="header__icons">
            <h3 className="header_coin">BT-BNB</h3>
            <button className="core">
              <span>
                <img className="discount" src="core.svg" />
                core
              </span>
            </button>
            <button className="power">11x</button>
          </div>
        </div>
        <div className="card-body">
            <div className="body__top">
                <div className="top">
                <p>APR: </p>
                <span>485.77% <img className="calc" src="calc.svg" alt="" /></span>
                </div>
                <div className="top">
                <p>Earn: </p>
                <span>BT + Fees</span>
                </div>
            </div>
            <div className="body__bottom">
                <p>BTSwap <span className="body__bottom__span">EARNED</span></p>
                <div className="body_bottom_mid">
                <p className="harvest__amt">0.0000 </p>
                <button className="harvest-btn">Harvest</button>
                </div>
                <p>SDAO-BNB LP <span className="body__bottom__span">STALKED</span></p>
            </div>
            <div className="body__button">
            <button className="farms__wallet">CONNECT WALLET</button>
            </div>
          
        </div>
        <div className="card-footer mb-3">
          <div className="show-btn" onClick={() => setShow(!show)}>
            {show ? "Hide" : "Show"}
          </div>
        </div>
      </div>
      <div
        className="more-details"
        style={show ? { display: "block" } : { display: "none" }}
      >
        <span className="total_liq">
          Total Liquidity: <b className="amt">$327,564,44</b>
        </span>
        <div className="span-links">
          <p className="more__links">
            Get BTSwap-BNB LP{" "}
            <span>
              <i class="fas fa-external-link-alt"></i>
            </span>
          </p>
          <p className="more__links">
            View Contract{" "}
            <span>
              <i class="fas fa-external-link-alt"></i>
            </span>
          </p>
          <p className="more__links">
            See pair info{" "}
            <span>
              <i class="fas fa-external-link-alt"></i>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default FarmsCard;
