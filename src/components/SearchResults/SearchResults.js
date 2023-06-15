import React from 'react'
import './SearchResultsStyles.css'
import { useDispatch } from "react-redux"
import { selectPlayer } from '../../redux/selectedPlayer'

const SearchResults = ({ searchPlayers }) => {

  const dispatch = useDispatch()

  const handleSelectPlayer = (e) => {
    const id = e.target.getAttribute('data-index')
    dispatch(selectPlayer(searchPlayers[id]))
    console.log(searchPlayers[id])
  }

  return (
    <div className="search-results">
        {searchPlayers.map((player, pos) => {
            return (
                <div onClick={handleSelectPlayer} className="player-result" data-index={pos} key={player.id}>{player.first_name} {player.last_name}</div> 
            )
        })}
    </div>
  )
}

export default SearchResults
