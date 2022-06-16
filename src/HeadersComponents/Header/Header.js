import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cartImg from '../../assets/cart.png'
import './Header.scss'

const Header = () => {

  const setActive = ({ isActive }) => isActive ? 'active-link' : 'non-active-link'
  const userName = localStorage.getItem('userName')
  const location = useLocation()

  const clearStorage = () => {
    localStorage.clear()
  }

  return (
    <header className="all-header">
      <div className='starter-store-block'>
        <NavLink className={setActive} to='/starter-store'>
          <div className="one-of-items">Starter Store</div>
        </NavLink>
      </div>

      {localStorage.hasOwnProperty('userName') === false ?
        <div className="right-items">
          <NavLink className={setActive} to='/sign-up'>
            <div className="one-of-items">Sign up</div>
          </NavLink>

          <NavLink className={setActive} to='/sign-in'>
            <div className="one-of-items">Sign in</div>
          </NavLink>

          <NavLink className={setActive} to='/cart'>
            <div className="one-of-items">
              <img className="img-cart" src={cartImg} alt='cart' />
              <div>Cart</div>
            </div>
          </NavLink>
        </div>
        :
        <div className="right-items">
          <div className="username-item">{userName}</div>
          <NavLink className={setActive} to='/sign-in'>
            <div className="logout" onClick={clearStorage}>Log out</div>
          </NavLink>
          <NavLink className={setActive} to='/cart'>
            <div className="one-of-items">
              <img className="img-cart" src={cartImg} alt='cart' />
              <div>Cart</div>
            </div>
          </NavLink>
        </div>
      }

      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" htmlFor="menu__toggle">
          <span></span>
        </label>
        <ul className="menu__box">
          <li>
            <NavLink className="menu__item" to='/starter-store'>
              <div className="one-of-items">Starter Store</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to='/sign-up'>
              <div className="one-of-items">Sign up</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to='/sign-in'>
              <div className="one-of-items">Sign in</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="menu__item" to='/cart'>
              <div className="one-of-items">
                <img className="img-cart" src={cartImg} alt='cart' />
                <div>Cart</div>
              </div>
            </NavLink>
          </li>

        </ul>
      </div>

    </header >
  )
}

export default Header