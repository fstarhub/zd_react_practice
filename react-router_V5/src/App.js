import React, { Component, Fragment } from 'react'
import { Switch,Route } from 'react-router-dom'

import { setUser } from './utils/cookie'

import Login from './pages/Login'
import Admin from './pages/Admin'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/" component={Admin}></Route>
        </Switch>
      </Fragment>
    )
  }

  // componentDidMount() {
  //   setUser('shuai')
  // }
}

