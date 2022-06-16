import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import cartImg from '../../assets/cart.png'

const Nav = () => {

  const setActive = ({ isActive }) => isActive ? 'active-link' : 'non-active-link'
  const clearStorage = () => {
    localStorage.clear()
  }

  const location = useLocation()
  const userName = localStorage.getItem('userName')

  return (
    <div>
      {!localStorage.hasOwnProperty('userName') && location.pathname.includes('/') ?
        <div className="unauthorized-links">
          <NavLink className={setActive} to='/sign-up'>
            <div className="one-of-items">Sign up</div>
          </NavLink>

          <NavLink className={setActive} to='/sign-in'>
            <div className="one-of-items">Sign in</div>
          </NavLink>

        </div>
        :
        <div className="right-items">
          <div className="username-item">{userName}</div>
          <NavLink className={setActive} to='/sign-in'>
            <div className="logout" onClick={clearStorage}>Log out</div>
          </NavLink>
        </div>
      }
    </div>
  )
}

export default Nav