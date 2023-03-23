import React from 'react'
import noImg from '../noProfileImg.png'


function PlayerPortal(props) {
  console.log(props.stats)
  return (
   <div className='overlay'>
      <div className='modalContainer'>
        <img className='playerImg' src={`http://cdn.nba.com/headshots/nba/latest/260x190/${props.personId}.png`} alt="" onError={event => {event.target.src = noImg}} />
        {props.stats[0]?.fga ? props.stats[0].fga : "N/A"} 
        <button onClick={props.onclose}>Close</button>
      </div>
   </div> 

  )
}

export default PlayerPortal