import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import './Header.scss'

const Header = () => {

  const location = useLocation()
  let linkStarter = 0
  let linkSignUp = 0
  let linkSignIn = 0
  let cart = 0

  if (location.pathname === '/starter-store') {
    linkStarter = 1
  }
  else if (location.pathname === '/sign-up') {
    linkSignUp = 1
  }
  else if (location.pathname === '/sign-in') {
    linkSignIn = 1
  }
  else if (location.pathname === '/cart') {
    cart = 1
  }
  else if (location.pathname === '/') {
    linkStarter = 1
  }

  return (
    <header className="all-header">
      <Link className={linkStarter === 0 ? 'Link-starter-store' : 'link-active'} to='/starter-store'>
        <div className="one-of-items">Starter Store</div>
      </Link>

      <div className="right-items">

        <Link className={linkSignUp === 0 ? 'Link-starter-store' : 'link-active'} to='/sign-up'>
          <div className="one-of-items">Sign up</div>
        </Link>

        <Link className={linkSignIn === 0 ? 'Link-starter-store' : 'link-active'} to='/sign-in'>
          <div className="one-of-items">Sign in</div>
        </Link>

        <Link className={cart === 0 ? 'Link-starter-store' : 'link-active'} to='/cart'>
          <div className="one-of-items">Cart</div>
        </Link>

      </div>
    </header >
  )
}

export default Header