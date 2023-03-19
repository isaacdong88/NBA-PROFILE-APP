import React from 'react'

function Team(props) {
  return (
    <div>
      <div>
        {props.team.team} 
      </div>  
    
      <div>
        <img className='teamLogo' src={`https://cdn.nba.com/logos/nba/${props.team.id}/primary/L/logo.svg`} alt="" />
      </div>
    </div>
  )
}

export default Team