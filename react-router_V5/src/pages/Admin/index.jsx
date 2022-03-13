import React, { Component, Fragment } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

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
import User from '../User'
import Role from '../Role'
import Bar from '../Charts/bar'
import Line from '../Charts/line'
import Pie from '../Charts/pie'
import Error from '../Error'
import Test from '../Test'

export default class Admin extends Component {

  state = {
    collapsed: false,
  }
  render() {
    if (!getUser()) {
      return (
        <Redirect to='/login' />
      )
    }
    return (
      <Fragment>
        <Layout id="components-layout-demo-custom-trigger">
        <SiderNav collapsed={this.state.collapsed} />
        <Layout className="site-layout">
          <HeaderNav collapsed={this.state.collapsed} updateCollapsed={this.newCollapsed} />
          <ContentNav>
            <Switch>
              <Redirect exact from="/" to="/home" component={Home}></Redirect>
              <Route path="/home" component={Home}></Route>
              <Route path="/category" component={Category}></Route>
              <Route path="/product" component={Product}></Route>
              <Route path="/user" component={User}></Route>
              <Route path="/role" component={Role}></Route>
              <Route path="/Test" component={Test}></Route>
              <Route path="/charts/bar" component={Bar}></Route>
              <Route path="/charts/line" component={Line}></Route>
              <Route path="/charts/pie" component={Pie}></Route>
              <Route component={Error}></Route>
            </Switch>
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
