import React from 'react'
import Button from "../components/Button"

function Nav(props) {
  return (
    <div className='navbar'>
      <div>
        <Button viewTeam={props.viewTeam} />
      </div>
      <div>
        NBA WIKI
      </div>
      <div></div>
    </div>
  )
}

export default Nav