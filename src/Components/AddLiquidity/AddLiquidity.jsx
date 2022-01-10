import React from 'react';
import HelpIcon from '../HelpIcon/HelpIcon';
import ButtonGroup from '../TradeLiquidityBtn/ButtonGroup';
import './AddLiquidity.css';
import {NavLink} from 'react-router-dom';

function AddLiquidity() {
    return (
        <div className='add_liquidity_page'>
            <ButtonGroup/>
            <div className="add__box">
            <div className="add__liquidity">
        <div className="liquidity__navbar">
        <NavLink activeClassName='active-link' to='/liquidity' >
          <div className="liquidity__nav_1 col-2">
          <span className="back__icon">
              <i class="fas fa-chevron-left"></i>
            </span>
          </div>
          </NavLink>
          <div className="liquidity__nav_2 col-6">
            <span className="liq_nav__title">Add Liquidity</span>
          </div>
          <div className="liquidity__nav_3 col-4">
            <span className="nav__settings">
              <i class="fas fa-cog"></i>
            </span>
            <span className="nav__time">
              <i class="far fa-clock"></i>
            </span>
          </div>
        </div>
        <span className="liq__tagline">Add liquidity to receive LP tokens  <i class="far fa-question-circle"></i></span>
        <hr className="buy__line"></hr>
        <div className="trade__input">
          <div className="icon__title">
            {/* <img className="inp__icon__1" src="bootomlogo.svg"></img> */}
            <span className="inp__title__1">Select a currency</span>
            <button data-bs-toggle="modal" data-bs-target="#exampleModal" className="inp__choose__1">
              
              <i class="fas fa-chevron-down"></i>
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
          </div>
          <input className="inp__1" type="text" placeholder="0.00" />
        </div>
        <div className="ex-icon">
          <img src="plus.svg" className="plus-icon" />
        </div>
        <div className="trade__input__2">
          <div className="icon__title">
            {/* <img className="inp__icon__1" src="bootomlogo.svg"></img> */}
            <span className="inp__title__1">Select a currency</span>
            <span className="inp__choose__1">
              <i class="fas fa-chevron-down"></i>
            </span>
          </div>
          <input className="inp__1" type="text" placeholder="0.00" />
        </div>
        <button className="trade__wallet">CONNECT WALLET</button>
      </div>
      </div>
      <HelpIcon />
        </div>
    )
}

export default AddLiquidity
