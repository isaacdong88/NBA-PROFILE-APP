import React from 'react'
import noImg from '../noProfileImg.png'
import { useEffect, useState } from 'react';
import PlayerCard from './PlayerCard';

function Player(props) {
    const [playerId, setPlayerId] = useState(null)
    const [stats, setStats] = useState(null);
    const searchTerm = props.player.lastName
    const getPlayer = async () => {
        const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${searchTerm}&per_page=100`);
        const data = await response.json();
        const player = data.data.filter((player) => player.first_name === props.player.firstName && player.team.full_name === props.teamname)
        // console.log(data)
        // && player.team.full_name === props.teamname
        console.log(player);
        if (player.length !== 0) {
            const playerID = player[0].id
            setPlayerId(playerID)
        }
      };

      useEffect(() => {
        getPlayer();
      }, []);

    const getStats = async () => {
        if (playerId !== null) {
            const response2 = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
            const data2 = await response2.json()
            const stats = data2.data[0].fgm
            setStats(stats)
        } else {
            setStats('Data N/A')
        }
        // const response2 = await fetch(`https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=${playerId}`)
        // const data2 = await response2.json()
        // const stats = data2.data[0].fgm
        // console.log(stats)
        // setStats(stats)
    }

    //   useEffect(() => {
    //     getStats();
    //   });

  return (
    <div onClick={getStats}>
        <PlayerCard stats={stats}/>
        <img className='playerImg' src={`http://cdn.nba.com/headshots/nba/latest/260x190/${props.player.personId}.png`} alt="" onError={event => {event.target.src = noImg}} />
        {/* <div>{props.player.firstName} {props.player.lastName}</div> */}
    </div>

  )
}

export default Player