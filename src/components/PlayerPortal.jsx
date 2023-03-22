import React from 'react'


function PlayerPortal(props) {
  console.log(props.stats)
  return (
    <div className='modalContainer'>
      {props.stats[0]?.fga ? props.stats[0].fga : "N/A"} 
      <button onClick={props.onclose}>Close</button>
    </div>
  )
}

export default PlayerPortal