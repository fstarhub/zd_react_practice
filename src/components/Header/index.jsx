import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'

import { doLogout } from '../../redux/action/user'
import UserApi from '../../api/user'

import { Layout, Button, Menu, Dropdown, Modal, message, Input } from 'antd'
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

  state = {
    isChangePasswordVisible: false
  }
  passwordRef = React.createRef()

  render() {
    const { isChangePasswordVisible } = this.state
    // console.log(this.props, 'props')
    const menu = (
      <Menu>
        <Menu.Item key="0" onClick={this.getMyInfo}>我的信息</Menu.Item>
        <Menu.Item key="1" onClick={this.changePassword}>修改密码</Menu.Item>
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
              <Dropdown overlay={menu} trigger={'click'}>
                <a href='##' className="ant-dropdown-link" onClick={e => e.preventDefault()}>设置 <DownOutlined /></a>
              </Dropdown>
              <Modal title="密码修改" visible={isChangePasswordVisible} onOk={this.handleOk} onCancel={this.handleCancel}>
                <Input ref={this.passwordRef} placeholder="请输入新密码"></Input>
              </Modal>
            </div>
          </Header>
      </>
    )
  }

  toggle = () => {
    this.props.updateCollapsed()
  }
  getMyInfo = () => {
    Modal.info({
      title: '个人信息',
      content: (
        <div>
          <p>您的账号注册于2021-11-11，目前是可用状态。</p>
        </div>
      ),
      onOk() {}
    })
  }
  changePassword = () => {
    // console.log(process.env)
    this.setState(() => {
      return { isChangePasswordVisible: true }
    })
  }
  handleOk = () => {
    // console.log('current', this.passwordRef.current.state.value)
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: '修改密码将会退出当前账号，确定要修改吗',
      okText: '确认',
      cancelText: '取消',
      onOk: async() => {
        const res = await UserApi.modifyPassword({password: this.passwordRef.current.state.value})
        if (res.message === '修改密码成功') {
          // this.setState({ isChangePasswordVisible: false })
          this.props.login_out('')
          this.props.history.replace('/login')
        } else {
          message.error(res.message)
        }
      },
      onCancel: () => {
        console.log(process.env)
        message.success('已取消')
      }
    });
    
  }
  handleCancel = () => {
    this.setState({ isChangePasswordVisible: false })
    this.passwordRef.current.state.value = ''
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
