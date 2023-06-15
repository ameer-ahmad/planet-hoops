import React from 'react'
import './SearchResultsStyles.css'

const SearchResults = ({ searchPlayers }) => {
  return (
    <div className="search-results">
        {searchPlayers.slice(0, 15).map((player, pos) => {
            return (
                <div className="player-result" key={pos}>{player.first_name} {player.last_name}</div> 
            )
        })}
    </div>
  )
}

export default SearchResults