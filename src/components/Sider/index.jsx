import React, { Component } from 'react'
import { Link, Navigate } from 'react-router-dom'

import Logo from '../../pages/Login/images/newLogo.png'


import './index.less'
import { Menu, Layout } from 'antd'
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from '@ant-design/icons'
// import Item from 'antd/lib/list/Item'
import menuList from '../../config/menu'
const { Sider } = Layout
const { SubMenu } = Menu

export default class SiderNav extends Component {

  constructor(props) {
    super(props)
    // this.menuNodes = this.getMenuList(menuList)
  }

  state = {
    menuList: []
  }

  // 生成菜单栏
  getMenuList = (menuList) => {
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
            {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {
              this.getMenuList(item.children)
            }
          </SubMenu>
        )
      }
    })
  }
  render() {
    // console.log(this.props, 'siderNav')
    return (
      <>
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo">
            <img className='logoImg' src={Logo} alt="购物吧" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']}>
            {
              this.state.menuList
            }
          </Menu>
        </Sider>
      </>
    )
  }

  componentDidMount() {
    const list = this.getMenuList(menuList)
    // console.log(list, 'list')
    this.setState({menuList: list})
  }
}
