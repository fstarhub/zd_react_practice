import React, { Component } from 'react'
import { Link, useNavigate } from 'react-router-dom'


import { removeUser } from '../../utils/cookie'

import { Layout, Button, Menu, Dropdown } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DownOutlined
} from '@ant-design/icons'
import './index.less'



const { Header } = Layout

export default class HeaderNav extends Component {

  componentWillUnmount() {
    removeUser()
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="https://www.antgroup.com">我的信息</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">修改密码</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出</Menu.Item>
      </Menu>
    )
    return (
      <>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <div className="logoOut">
              <span className='welcomeUser'>欢迎您：XXXXX</span>
              {/* <Button type="link" size='large'>
                Link
              </Button> */}
              <Dropdown overlay={menu} trigger={'click'}>
                <a href='##' className="ant-dropdown-link" onClick={e => e.preventDefault()}>设置 <DownOutlined /></a>
              </Dropdown>
            </div>
          </Header>
      </>
    )
  }

  toggle = () => {
    this.props.updateCollapsed()
  }
  // loginOut = () => {
  //   // console.log('sdsd',this)
  // }
}
