import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { doLogout } from '../../redux/action/user'
import { removeUser } from '../../utils/cookie'

import { Layout, Button, Menu, Dropdown, Modal, message } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  DownOutlined,
  ExclamationCircleOutlined
} from '@ant-design/icons'
import './index.less'

const { Header } = Layout

class HeaderNav extends Component {

  // componentWillUnmount() {
  //   removeUser()
  // }

  render() {
    // console.log(this.props, 'props')
    const menu = (
      <Menu>
        <Menu.Item key="0">
          <a href="https://www.antgroup.com">我的信息</a>
        </Menu.Item>
        <Menu.Item key="1">
          <a href="https://www.aliyun.com">修改密码</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3" onClick={this.logout}>退出</Menu.Item>
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
              <span className='welcomeUser'>欢迎您：{this.props.user_name}</span>
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
  logout = () => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '确定要退出吗',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        this.props.login_out('')
        this.props.history.replace('/login')
      },
      onCancel: () => {
        message.success('已取消')
      }
    });
  }
}

export default connect(
  state => {
    return {user_name: state.user.user_name}
  },
  // dispatch => {
  //   return {
  //     login_out: param => {dispatch(login_out(param))}
  //   }
  // }

  {login_out: doLogout}
)(withRouter(HeaderNav))
