import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

// import Photo from '../../components/Nav/blackturnip.png';





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
            <Link to="/signup"><button>Signup</button></Link>
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
      <div class=''>
      {/* <img src={Photo} alt="logo" /> */}
      </div>
      
      
      <h1 class='flex-row'>
        <div class="mx-1">
        <Link to="/" class='site-logo'>
          {/* <img src={Photo} alt='turnip' /> */}
        </Link>
        </div>
      </h1>

      <nav>{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
