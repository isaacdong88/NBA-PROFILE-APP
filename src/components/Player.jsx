import React from 'react'

function Player(props) {
  return (
    <div>{props.team.firstName} {props.team.lastName}</div>
  )
}

export default Player