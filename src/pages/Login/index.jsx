import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import Admin from '../Admin'
class Login extends Component {
  render() {
    // 如果用户登录跳到主页
    if (this.props.user) {
      return (
        <Navigate to='/admin' element={<Admin />} />
      )
    }
    return (
      <div>
        Login,,,
      </div>
    )
  }
}

export default connect(
  state => {
    console.log(state.user)
    return {user: state.user}
  },
  dispatch => {
    return {

    }
  }
)(Login)
