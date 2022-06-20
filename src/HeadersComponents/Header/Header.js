import React from "react";
import { NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import cartImg from '../../assets/cart.png'
import './Header.scss'

const Header = () => {

  const setActive = ({ isActive }) => isActive ? 'active-link' : 'non-active-link'
  const userName = localStorage.getItem('userName')
  const clearStorage = () => {
    localStorage.clear()
  }

  const NavFunc = () => {
    return (
      <div>
        {localStorage.hasOwnProperty('userName') ?
          <div className="right-items">
            <NavLink className={setActive} to={userName === 'admin' ? '/admin' : ' '}>
              <div className="one-of-items">{userName === 'admin' ? userName : null}</div>
            </NavLink>
            <NavLink className={setActive} to='/sign-in'>
              <div className="one-of-items" onClick={clearStorage}>Log Out</div>
            </NavLink>
          </div>
          :
          <div className="unauthorized-links">
            <NavLink className={setActive} to='/sign-up'>
              <div className="one-of-items">Sign Up</div>
            </NavLink>
            <NavLink className={setActive} to='/sign-in'>
              <div className="one-of-items">Sign In</div>
            </NavLink>
          </div>
        }
      </div>
    )
  }

  return (
    <header className="all-header">
      <div className='starter-store-block'>
        <NavLink className={setActive} to='/starter-store'>
          <div className="one-of-items">Starter Store</div>
        </NavLink>
      </div>
      <div className="right-items">
        {NavFunc()}
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