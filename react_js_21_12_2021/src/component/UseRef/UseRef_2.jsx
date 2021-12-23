import React, { useRef } from 'react'

function UseRef_2() {
  const name = useRef('')
  const email = useRef('')
  const password = useRef('')
  function logInputs() {
    const [nameValue, emailValue, passwordValue] = [
      name.current.value,
      email.current.value,
      password.current.value,
    ]
    if (nameValue !== '' && emailValue !== '' && passwordValue !== '') {
      console.log(
        name.current.value,
        email.current.value,
        password.current.value,
      )
    }
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

export default UseRef_2
