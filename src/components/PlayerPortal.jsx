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
          <div>Position <br />{props.playerName.teamSitesOnly.posFull}</div>
          <div>Games Played <br />{props.stats[0]?.games_played ? props.stats[0].games_played : "N/A"}</div>
          <div>Minutes Played <br />{props.stats[0]?.min ? props.stats[0].min : "N/A"}</div>
          <div>Points <br />{props.stats[0]?.pts ? props.stats[0].pts : "N/A"}</div>
          <div>Field Goals Made <br />{props.stats[0]?.fgm ? props.stats[0].fgm : "N/A"}</div>
          <div>Field Goals Attempted <br />{props.stats[0]?.fga ? props.stats[0].fga : "N/A"}</div>
          <div>Field Goal Percentage <br />{props.stats[0]?.fg_pct ? Math.trunc(props.stats[0].fg_pct*100) : "N/A"}%</div>
          <div>3 Points Made <br />{props.stats[0]?.fg3m ? props.stats[0].fg3m : "N/A"}</div>
          <div>3 Points Attempted <br />{props.stats[0]?.fg3a ? props.stats[0].fg3a : "N/A"}</div>
          <div>3 Point Percentage <br />{props.stats[0]?.fg3_pct ? Math.trunc(props.stats[0].fg3_pct*100) : "N/A"}%</div>
          <div>Free Throws Made <br />{props.stats[0]?.ftm ? props.stats[0].ftm : "N/A"}</div>
          <div>Free Throws Attempted <br />{props.stats[0]?.fta ? props.stats[0].fta : "N/A"}</div>
          <div>Free Throw Percentage <br />{props.stats[0]?.ft_pct ? Math.trunc(props.stats[0].ft_pct*100) : "N/A"}%</div>
          <div>Offensive Rebounds <br />{props.stats[0]?.oreb ? props.stats[0].oreb : "N/A"}</div>
          <div>Defensive Rebounds <br />{props.stats[0]?.dreb ? props.stats[0].dreb : "N/A"}</div>
          <div>Rebounds <br />{props.stats[0]?.reb ? props.stats[0].reb : "N/A"}</div>
          <div>Assists <br />{props.stats[0]?.ast ? props.stats[0].ast : "N/A"}</div>
          <div>Turnovers <br />{props.stats[0]?.turnover ? props.stats[0].turnover : "N/A"}</div>
          <div>Steals <br />{props.stats[0]?.stl ? props.stats[0].stl : "N/A"}</div>
          <div>Blocks <br />{props.stats[0]?.blk ? props.stats[0].blk : "N/A"}</div>
          <div>Personal Fouls <br />{props.stats[0]?.pf ? props.stats[0].pf : "N/A"}</div>
        </div>
      </div>
   </div> 

  )
}

export default PlayerPortal