import React, { memo } from 'react'
import './Header.css'
import Logo from './Logo/Logo'
import Navigation from './Navigation/Navigation'
import Theme from './Theme/Theme'

function Header() {
  return (
    <header>
      <div className="header-content">
        <Logo />
        <div className="header-links">
          <Navigation />
          <Theme />
        </div>
      </div>
    </header>
  )
}

export default memo(Header)