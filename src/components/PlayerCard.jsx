import React from 'react'

function PlayerCard(props) {
  console.log(props.stats)
  return (
    <div>
      {props.stats[0]?.fga ? props.stats[0].fga : "N/A"} 
    </div>
  )
}

export default PlayerCard