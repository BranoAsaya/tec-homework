import React from 'react'

function Authenticated({ auth, setAuth }) {
  const userInfo = auth ? auth.data.email : ''
  const logOutBtn = auth ? <button onClick={() => setAuth(null)}>LOG OUT</button> : ''
  return (
    <div>
      <h1>Authenticated</h1>
      {logOutBtn}
      {userInfo}
    </div>
  )
}

export default Authenticated
