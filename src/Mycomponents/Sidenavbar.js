import React from 'react';
import { NavLink } from 'react-router-dom';

function Sidenavbar() {
  return (
    <div id="mySidenav" className="inventory-left-menu sidenav">
      <ul>
        <li>
          <NavLink exact to="/">
            <img src="images/home.svg" alt="Home Icon"/> Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Itemlist">
            <img src="images/inventory.svg" alt="Inventory Icon"/> Itemlist
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Sale">
            <img src="images/sales.svg" alt="Sales Icon"/> Sales
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Purchase">
            <img src="images/purchase.svg" alt="Purchase Icon"/> Purchase
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/Report">
            <img src="images/report.svg" alt="Report Icon"/> Report
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidenavbar;
