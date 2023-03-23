import React from 'react'

function Button(props) {
  return (
    <div className='view-btn'>
      <button onClick={props.viewTeam}>View Teams</button>
    </div>
  )
}

export default Button