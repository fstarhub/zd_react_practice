import React, { Component, Fragment } from 'react'
import { Routes,Route } from 'react-router-dom'

import { setUser } from './utils/cookie'

import Login from './pages/Login'
import Admin from './pages/Admin'

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </Fragment>
    )
  }

  componentDidMount() {
    setUser('shuai')
  }
}

