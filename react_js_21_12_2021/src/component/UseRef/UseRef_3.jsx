import React, { useRef ,useState} from 'react'

function UseRef_3() {
  const name = useRef('')
  const email = useRef('')
  const password = useRef('')
  const [disabled,setDisabled]=useState(true)

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
              setDisabled(false)

    }
  }
  return (
    <div>
      <form>
        <input type="text" ref={name} onChange={logInputs}/>
        <input type="email" ref={email} onChange={logInputs}/>
        <input type="password" ref={password} onBlur={logInputs}/>
        <input type="button" value="LogIn" onClick={logInputs} disabled={disabled}/>
      </form>
    </div>
  )
}

export default UseRef_3
