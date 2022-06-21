import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cartImg from '../../assets/cart.png'

const Hamburger = () => {

  const clearStorage = () => {
    localStorage.clear()
  }
  const location = useLocation()
  const userName = localStorage.getItem('userName')

  return (
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

        {!localStorage.hasOwnProperty('userName') && location.pathname.includes('/') ?
          <div>
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
          </div>
          :
          <div>
            <li>
              <div className="one-of-items">{userName}</div>
            </li>
            <li>
              <NavLink className="menu__item" to='/sign-in'>
                <div className="one-of-items" onClick={clearStorage}>Log out</div>
              </NavLink>
            </li>
          </div>
        }

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
  )

}

export default Hamburger