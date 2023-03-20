import React from 'react'

function Player(props) {
  return (
    <div>{props.player.firstName} {props.player.lastName}</div>
  )
}

export default Player