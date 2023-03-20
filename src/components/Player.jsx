import React from 'react'
import noImg from '../noProfileImg.png'
import { useEffect } from 'react';

function Player(props) {
    const searchTerm = props.player.lastName
    const fetchTeam = async () => {
        const response = await fetch(`https://www.balldontlie.io/api/v1/players?search=${searchTerm}`);
        const data = await response.json();
        const player = data.data.filter((player) => player.first_name === props.player.firstName)[0]
        console.log(data)
        console.log(player);
      };

      useEffect(() => {
        fetchTeam();
      }, []);
  return (
    <div>
        <img className='playerImg' src={`http://cdn.nba.com/headshots/nba/latest/260x190/${props.player.personId}.png`} alt="" onError={event => {event.target.src = noImg}} />
        <div>{props.player.firstName} {props.player.lastName}</div>
    </div>

  )
}

export default Player