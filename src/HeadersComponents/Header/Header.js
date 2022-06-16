import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import Nav from "./Nav";
import cartImg from '../../assets/cart.png'
import './Header.scss'

const Header = () => {

  const setActive = ({ isActive }) => isActive ? 'active-link' : 'non-active-link'

  return (
    <header className="all-header">
      <div className='starter-store-block'>
        <NavLink className={setActive} to='/starter-store'>
          <div className="one-of-items">Starter Store</div>
        </NavLink>
      </div>
      <div className="right-items">
        <Nav />
        <NavLink className={setActive} to='/cart'>
          <div className="one-of-items">
            <img className="img-cart" src={cartImg} alt='cart' />
            <div>Cart</div>
          </div>
        </NavLink>
      </div>

      <Hamburger />
    </header >
  )
}

export default Header