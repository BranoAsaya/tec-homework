import React, { useState } from 'react'
import API_KEY from '../../api/api_key'
import axios from 'axios'
import { Redirect } from "react-router-dom";


function Login({auth,setAuth}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const verifyPassword = (e) => {
    e.preventDefault()
    const emailJson = JSON.stringify(email)
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    axios
      .post(url, { email, password })
      .then((response) => {
        setAuth(response)
        localStorage.setItem('email', emailJson);
        <Redirect to="/Authenticated" />
      })
      .catch(function (error) {
        console.log(error)
      })
  }
  const inputSave = (e) => {
    if (e.target.name === 'newEmail') {
      setEmail(e.target.value)
    } else {
      setPassword(e.target.value)
    }
  }
  if(auth){
    console.log('Redirecting..')
    return <Redirect to='/Authenticated' />
  }
  return (
    <div>
      <form onSubmit={verifyPassword}>
        <input
          type="email"
          onChange={inputSave}
          name="newEmail"
          autoComplete="on"
        />
        <input
          type="password"
          onChange={inputSave}
          name="newPassword"
          autoComplete="on"
        />
        <input type="submit" />
      </form>
      <h1>Log in</h1>
    </div>
  )
}

export default Login
