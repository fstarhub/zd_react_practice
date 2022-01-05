import React, { Component } from 'react'
import { Routes,Route } from 'react-router-dom'

import Login from './pages/Login'
import Admin from './pages/Admin'

export default class App extends Component {
  render() {
    return (
      <div>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/admin/*" element={<Admin />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      </div>
    )
  }
}

