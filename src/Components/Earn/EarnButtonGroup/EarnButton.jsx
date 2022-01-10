import React from 'react';
import { NavLink} from 'react-router-dom';

function EarnButton() {
    return (
        <div className="title__btns">
          <NavLink activeClassName='active-link' to='/farms' >
        Farms
        </NavLink>
        <hr className="btn_border"></hr>
        <NavLink activeClassName='active-link' to='/pools' >
        Pools
        </NavLink>
        <hr className="btn_border"></hr>
      </div>
    )
}

export default EarnButton
