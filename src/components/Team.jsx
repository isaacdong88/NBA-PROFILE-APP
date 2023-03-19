import React from 'react'

function Team(props) {
  return (
    <div>{props.team.firstName} {props.team.lastName}</div>
  )
}

export default Team