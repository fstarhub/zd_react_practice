import React, { Component } from 'react'

import menuList from '../../config/menu'
import './index.less'
import { Menu, Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import Item from 'antd/lib/list/Item'
const { Sider } = Layout
const { SubMenu } = Menu


export default class SiderNav extends Component {
  render() {
    // console.log(this.props, 'siderNav')
    return (
      <>
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {
              menuList.map(menuItem => {
                if (menuItem.children) {
                  const childItem = menuItem.children
                  childItem.map(childMenuItem => {
                    return (
                      <SubMenu key={menuItem.key} icon={menuItem.icon} title={menuItem.title}>
                      <Menu.Item key={childMenuItem.key}>{childMenuItem.title}</Menu.Item>
                    </SubMenu>
                    )
                  })
                  
                } else {
                  return (
                    <Menu.Item key={menuItem.key} icon={menuItem.icon}>
                      {menuItem.title}
                    </Menu.Item>
                  )
                }
                
              })
            }
          </Menu>
        </Sider>
      </>
    )
  }
}
