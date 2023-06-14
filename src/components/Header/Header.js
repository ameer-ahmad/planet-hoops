import React from 'react'
import './HeaderStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
        <div className="header-container">
            <div className="logo"><img alt="logo" src="/logo.png"/></div>
            
            <div className="search">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                <input type="text" placeholder="Enter a Player..." />
            </div>
        </div>
    </header>
  )
}

export default Header