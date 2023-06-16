import React, { useState, useEffect } from 'react'
import "./PlayerDataStyles.css"
import { useSelector } from "react-redux"
import playersInfo from '../../data/players'
import Axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faHeart } from '@fortawesome/free-solid-svg-icons'
import Favourites from '../Favourites/Favourites'
import { useDispatch } from "react-redux"
import { addPlayer, removePlayer } from '../../redux/favouritePlayers'

const PlayerData = () => {

    const dispatch = useDispatch()

    const { players } = useSelector((state) => state.favouritePlayers)

    const { player } = useSelector((state) => state.selectedPlayer)
    const [playerName, setPlayerName] = useState("")
    const [playerStats, setPlayerStats] = useState({})
    const [isFavourite, setIsFavourite] = useState(false)

    useEffect(() => {
        const getPlayerStats = async () => {
            if (Object.keys(player).length !== 0) {
                try {
                    const res = await Axios(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${player.id}`)
                    setPlayerStats(res.data.data[0])
                } catch(err) {
                    if (err.response.status === 429) {
                        alert("Slow down! You're sending too many requests to the server!")
                    }
                }
                
            }
            console.log(playerStats)
        }

        setPlayerName(`${player.first_name} ${player.last_name}`)
        getPlayerStats()

        if ((players.filter(e => e.id === player.id).length > 0)) {
            setIsFavourite(true)
        } else {
            setIsFavourite(false)
        }
        
    }, [player, players, playerStats])

    const toggleFavourite = () => {
        if (!isFavourite) {
            dispatch(addPlayer(player))
        } else {
            dispatch(removePlayer(player))
        }
        setIsFavourite(prevState => !prevState)
    }

    

  return (
    <div className="player-data-container">
        <div className="player-data">
            {Object.keys(player).length !== 0 && playerStats ? (
            <div>
                <div className='player-data-top'>
                    <div className="player-name">
                        <p className='first'>{player.first_name}</p>
                        <p className='last'>{player.last_name}</p>
                    </div>
                    <div className="player-image">
                        <img alt={playerName} src={`https://ak-static.cms.nba.com/wp-content/uploads/headshots/nba/latest/520x380/${playersInfo[playerName]}.png`} />
                        <FontAwesomeIcon className={isFavourite ? "favourite-heart fill" : "favourite-heart"} icon={faHeart} onClick={toggleFavourite} />
                    </div>
                </div>

                <p className='team-name'>{player.team.full_name}</p>

                <div className='player-data-bottom'>
                    <div className='stats-col'>
                        <div className='pos'>
                            <p className='stat-label'>Position</p>
                            <p className='stat'>{player.position}</p>
                        </div>
                        <div className='height'>
                            <p className='stat-label'>Height</p>
                            <p className='stat'>{player.height_feet}'{player.height_inches}"</p>
                        </div>
                        <div className='weight'>
                            <p className='stat-label'>Weight</p>
                            <p className='stat'>{player.weight_pounds}lbs</p>
                        </div>
                    </div>
                    <div className='stats-col'>
                        <div className='gp'>
                            <p className='stat-label'>Games Played</p>
                            <p className='stat'>{playerStats.games_played}</p>
                        </div>
                        <div className='mpg'>
                            <p className='stat-label'>MPG</p>
                            <p className='stat'>{playerStats.min}</p>
                        </div>
                        <div className='ppg'>
                            <p className='stat-label'>PPG</p>
                            <p className='stat'>{playerStats.pts}</p>
                        </div>
                    </div>
                    <div className='stats-col'>
                        <div className='fg'>
                            <p className='stat-label'>FG%</p>
                            <p className='stat'>{(playerStats.fg_pct * 100).toFixed(1)}</p>
                        </div>
                        <div className='fg3'>
                            <p className='stat-label'>3P%</p>
                            <p className='stat'>{(playerStats.fg3_pct * 100).toFixed(1)}</p>
                        </div>
                        <div className='ft'>
                            <p className='stat-label'>FT%</p>
                            <p className='stat'>{(playerStats.ft_pct * 100).toFixed(1)}</p>
                        </div>
                    </div>
                    <div className='stats-col'>
                        <div className='rpg'>
                            <p className='stat-label'>RPG</p>
                            <p className='stat'>{playerStats.reb}</p>
                        </div>
                        <div className='apg'>
                            <p className='stat-label'>APG</p>
                            <p className='stat'>{playerStats.ast}</p>
                        </div>
                        <div className='tov'>
                            <p className='stat-label'>TOV</p>
                            <p className='stat'>{playerStats.turnover}</p>
                        </div>
                    </div>
                </div>
                <a href={`https://www.youtube.com/results?search_query=${player.first_name}+${player.last_name}+highlights`} target="_blank" className='highlights' rel='noreferrer'><FontAwesomeIcon icon={faPlay} /> &nbsp;Watch Highlights</a>
            </div>
            ) : null}
            
        </div>
        <Favourites />
    </div>
     
    
  )
}

export default PlayerData