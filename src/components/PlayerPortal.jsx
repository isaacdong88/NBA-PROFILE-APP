import React from 'react'
import noImg from '../noProfileImg.png'


function PlayerPortal(props) {
  console.log(props.stats)
  return (
   <div onClick={props.onclose} className='overlay'>
      <div onClick={(e) => {
        e.stopPropagation();
      }} className='modalContainer'>
        <div className='close-btn'>
          {/* <button onClick={props.onclose}>X</button> */}
        </div>
        <div className='imgModalContainer'>
          <img className='playerImgModal' src={`http://cdn.nba.com/headshots/nba/latest/260x190/${props.personId}.png`} alt="" onError={event => {event.target.src = noImg}} />
        </div>
        <div className='playerName'>
          {props.playerName.firstName} {props.playerName.lastName}
        </div>
        <div className='stats-ctn'>
          <div>Season <br />{props.stats[0]?.season ? props.stats[0].season : "N/A"}</div>
          <div>Games Played <br />{props.stats[0]?.fgm ? props.stats[0].fgm : "N/A"} </div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
   </div> 

  )
}

export default PlayerPortal