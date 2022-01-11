import React, { Component, Fragment } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'

import { Layout, Menu } from 'antd'
import './index.less'

import { getUser } from '../../utils/cookie'
import Login from '../Login'

import SiderNav from '../../components/Sider'
import HeaderNav from '../../components/Header'
import ContentNav from '../../components/Content'
import Home from '../Home'
import Product from '../Product'
import Category from '../Category'

export default class Admin extends Component {

  state = {
    collapsed: false,
  }
  render() {
    // if (!getUser()) {
    //   return (
    //     <Navigate to='/login' element={<Login />} />
    //   )
    // }
    return (
      <Fragment>
        <Layout id="components-layout-demo-custom-trigger">
        <SiderNav collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <HeaderNav collapsed={this.state.collapsed} updateCollapsed={this.newCollapsed} />
          <ContentNav>
            <Routes>
              <Route index path="/home" element={<Home />}></Route>
              <Route path="/category" element={<Category />}></Route>
              <Route path="/product" element={<Product />}></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
            {/* <Outlet/> */}
            {/* <Home/> */}
          </ContentNav>
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

  componentDidMount() {
    
  }

}
