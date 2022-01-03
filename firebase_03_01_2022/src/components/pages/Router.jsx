import React, { useState } from 'react'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import Authenticated from './Authenticated'
import Register from './Register'

function Router() {
  const [auth, setAuth] = useState(null)
  const onlyLogIn = () => {
    if (!auth) {
      return (
        <>
          <Link to="/Login">Login</Link>
          <Link to="/Register">Register</Link>
        </>
      )
    } else {
      return (
        <>
          <Link to="/Authenticated">Authenticated</Link>
        </>
      )
    }
  }

  return (
    <BrowserRouter>
      <Link to="/">Home</Link>
      {onlyLogIn()}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" render={() => <Login auth={auth} setAuth={setAuth} />} />
        <Route
          exact
          path="/Authenticated"
          render={() => <Authenticated auth={auth} setAuth={setAuth} />}
        />
        <Route
          exact
          path="/Register"
          render={() => <Register auth={auth} setAuth={setAuth} />}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
