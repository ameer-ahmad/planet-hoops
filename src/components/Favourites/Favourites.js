import React from 'react'
import "./FavouritesStyles.css"
import { useSelector } from "react-redux"
import playersInfo from '../../data/players'

const Favourites = () => {

    const { players } = useSelector((state) => state.favouritePlayers)

  return (
    <div className="favourites-container">
        <h3 className="title">Favourites</h3>
        <div className="favourite-players">
            {players.map((player) => {
                return (
                    <div className="favourite-player" key={player.id}>
                        <img className='favourite-image' src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/520x380/${playersInfo[`${player.first_name} ${player.last_name}`]}.png`} alt={`${player.first_name} ${player.last_name}`} />
                        <p className='favourite-name'>{player.first_name} {player.last_name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Favourites