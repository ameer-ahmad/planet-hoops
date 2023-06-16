import React from 'react'
import "./FavouritesStyles.css"
import { useSelector } from "react-redux"
import playersInfo from '../../data/players'
import { useDispatch } from "react-redux"
import { selectPlayer } from '../../redux/selectedPlayer'

const Favourites = () => {

    const { players } = useSelector((state) => state.favouritePlayers)

    const dispatch = useDispatch()

    const switchToFavourite = (e) => {
        const selectedFavouritePlayer = players[e.target.getAttribute('data-index')]
        dispatch(selectPlayer(selectedFavouritePlayer))
    }

  return (
    <div className="favourites-container">
        <h3 className="title">Favourites</h3>
        <div className="favourite-players">
            {players.map((player, pos) => {
                return (
                    <div onClick={switchToFavourite} className="favourite-player" key={player.id} data-index={pos} >
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