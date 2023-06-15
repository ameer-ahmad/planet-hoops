import React, { useEffect, useState } from 'react'
import './HeaderStyles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Axios from 'axios'
import SearchResults from '../SearchResults/SearchResults'

const Header = () => {
    const [player, setPlayer] = useState("")
    const [searchPlayers, setSearchPlayers] = useState([])

    const handleSearch = async (player) => {
        if (player) {
            const res = await Axios(`https://www.balldontlie.io/api/v1/players?search=${player}`)
   
            setSearchPlayers(res.data.data)
        } else {
            setSearchPlayers([])
        }
        
 
    }

    const handleChange = (e) => {
        setPlayer(e.target.value)
        handleSearch(e.target.value)
    }


  return (
    <header>
        <div className="header-container">
            <div className="logo"><img alt="logo" src="/logo.png"/></div>
            
            <div className="search">
                <div className="search-container">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
                    <input type="text" placeholder="Enter a Player..." value={player} onChange={handleChange} />
                </div>
                <SearchResults searchPlayers={searchPlayers} />
            </div>
        </div>
    </header>
  )
}

export default Header