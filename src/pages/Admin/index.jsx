import React, { Component, Fragment } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import './index.less'

import { getUser } from '../../utils/cookie'
import Login from '../Login'

import SiderNav from '../../components/Sider'
import HeaderNav from '../../components/Header'
import ContentNav from '../../components/Content'

export default class Admin extends Component {

  state = {
    collapsed: false,
  }
  render() {
    if (!getUser()) {
      return (
        <Navigate to='/login' element={<Login />} />
      )
    }
    return (
      <Fragment>
        <Layout id="components-layout-demo-custom-trigger">
        <SiderNav collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <HeaderNav collapsed={this.state.collapsed} updateCollapsed={this.newCollapsed} />
          <ContentNav />
        </Layout>
        </Layout>
      </Fragment>
    )
  }

  newCollapsed = () => {
    this.setState((state) => {
      return {
        collapsed: !state.collapsed
      }
    }, 
    () => {
      console.log('collapsed状态已更新')
    })
  }

}
