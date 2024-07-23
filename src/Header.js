import React from "react";
import "./Header.css";
import { FaSearch } from 'react-icons/fa';
import { CiShoppingBasket } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className='header'>
      <Link to="/">
        <img 
          className="header__logo"
          src="https://th.bing.com/th/id/OIP.971KBGq3Fpt26rMkLIte8wHaFd?rs=1&pid=ImgDetMain"
          alt="logo"
        />
      </Link>

      <div className="header__search">
        <input
          className="header__searchInput" 
          type="text" 
        />
        <FaSearch
          className="header__searchIcon" 
        />
      </div>

      <div className="header__nav">
        <Link to='/login'>
          <div onClick={handleAuthentication} className='header__option'>
            <span className='header__optionLineOne'>
              Hello {user ? user.email : 'Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Returns
          </span>
          <span className='header__optionLineTwo'>
            and Orders
          </span>
        </div>
        <div className='header__option'>
          <span className='header__optionLineOne'>
            Your
          </span>
          <span className='header__optionLineTwo'>
            PROgram
          </span>
        </div>
        <Link to="/checkout">
          <div className="header__optionBasket">
            <CiShoppingBasket />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
