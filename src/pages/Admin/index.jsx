import React, { Component } from 'react'

import { Routes, Route, Navigate } from 'react-router-dom'

import { getUser } from '../../utils/cookie'

import Login from '../Login'

export default class Admin extends Component {
  render() {
    // if (!getUser()) {
    //   return <Redirect to="/login"></Redirect>
    // }
    if (!getUser()) {
      return (
        <Navigate to='/login' element={<Login />} />
      )
    }
    return (
      <div>
        admin
      </div>
    )
  }
}
