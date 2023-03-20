import React from 'react'
import noImg from '../noProfileImg.png'

function Player(props) {
  return (
    <div>
        <img className='playerImg' src={`http://cdn.nba.com/headshots/nba/latest/260x190/${props.player.personId}.png`} alt="" onError={event => {event.target.src = noImg}} />
        <div>{props.player.firstName} {props.player.lastName}</div>
    </div>

  )
}

export default Player