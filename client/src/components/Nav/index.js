import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";


function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
        <ul className="flex-row">
          <li className="nav__links">
            <Link to="/signup"><button>Sign-up</button></Link>
          </li>
          <li className="nav__links">
            <Link to="/login"><button>Login</button></Link>
          </li>
        </ul>
      );
    }
  }

  return (
    <header className="header-image">
      <h1 class='flex-row'>
        <div class="mx-1">
        <Link to="/" class='site-logo'>
        </Link>
        </div>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
