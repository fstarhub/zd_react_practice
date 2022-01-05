import React, { Component } from 'react'

import { Routes, Route } from 'react-router-dom'

import { getUser } from '../../utils/cookie'

import Login from '../Login'

export default class Admin extends Component {
  render() {
    // if (!getUser()) {
    //   return <Redirect to="/login"></Redirect>
    // }
    if (!getUser()) {
      return (
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
      )
    }
    return (
      <div>
        admin
      </div>
    )
  }
}
