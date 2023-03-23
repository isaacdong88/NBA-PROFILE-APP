import React from 'react'
import noImg from '../noProfileImg.png'


function PlayerPortal(props) {
  console.log(props.stats)
  return (
   <div className='overlay'>
      <div className='modalContainer'>
        <div className='close-btn'>
          <button onClick={props.onclose}>X</button>
        </div>
        <div className='imgModalContainer'>
          <img className='playerImgModal' src={`http://cdn.nba.com/headshots/nba/latest/260x190/${props.personId}.png`} alt="" onError={event => {event.target.src = noImg}} />
        </div>
        <div>
          {props.playerName.firstName} {props.playerName.lastName}
        </div>
        <div>
          {props.stats[0]?.fga ? props.stats[0].fga : "N/A"} <br />
          {props.stats[0]?.fgm ? props.stats[0].fgm : "N/A"} 

        </div>
      </div>
   </div> 

  )
}

export default PlayerPortal