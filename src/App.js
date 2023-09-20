import React, { Component, Fragment } from 'react'
import { Switch,Route } from 'react-router-dom'

import Login from './pages/Login'
import Admin from './pages/Admin'
import Register from './pages/Register'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </Fragment>
    )
  }

}

