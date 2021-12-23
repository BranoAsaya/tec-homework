import React, { useContext } from 'react'
import { UserContext } from '../../App'
function Level4() {
  const user = useContext(UserContext)
  return (
    <div>
      <h2>Level4</h2>
      <p>{user.name}</p>
      <p>{user.email}</p>
      <p>{user.address}</p>
    </div>
  )
}

export default Level4
