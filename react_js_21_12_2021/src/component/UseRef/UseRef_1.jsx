import React, { useRef } from 'react'

function UseRef_1() {
  const name = useRef('')
  const email = useRef('')
  const password = useRef('')
  function logInputs() {
    console.log(name.current.value, email.current.value, password.current.value)
  }
  return (
    <div>
      <form>
        <input type="text" ref={name} />
        <input type="email" ref={email} />
        <input type="password" ref={password} />
        <input type="button" value="LogIn" onClick={logInputs} />
      </form>
    </div>
  )
}

export default UseRef_1
