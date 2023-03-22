import React from 'react'

function PlayerPortal(props) {
  console.log(props.stats)
  return (
    <div>
      {props.stats[0]?.fga ? props.stats[0].fga : "N/A"} 
    </div>
  )
}

export default PlayerPortal