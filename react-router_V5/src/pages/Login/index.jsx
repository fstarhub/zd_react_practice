import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { doLogin } from '../../redux/action/user'

import { Form, Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import './index.less'

import logo from './images/logo.png'

class Login extends Component {
  render() {
    // 如果用户登录跳到主页
    if (this.props.user) {
      return (
        <Redirect to='/' />
      )
    }
    return (
      <div className='login'>
        <header className="login-header">
          <img src={logo} alt="logo" />
          <h1>欢迎登录洋码头</h1>
        </header>
        <section className='login-content'>
          <h2>用户登录</h2>
          <div>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{remember: true}}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="user_name"
                rules={[
                    {required: true, message: '请输入用户名称'},
                    {min: 4, message: '最少长度为4位'},
                    {max: 12, message: '最大长度为12位'},
                    {pattern: /^[0-9a-zA-Z_]{1,}$/, message: '必须为数字，字母，下划线组成'},
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="请输入用户名"/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                    {required: true, whitespace: false, message: '请输入用户密码!'},
                    {min: 4, message: '最少长度为4位'},
                    {max: 12, message: '最大长度为12位'},
                    {pattern: /^[0-9a-zA-Z_]{1,}$/, message: '必须为数字，字母，下划线组成'},
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="请输入用户密码"
                  autoComplete="true"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
              {/* Or <span type="primary" ghost>register now!</span> */}
              <Form.Item>
                <Button type="primary" ghost className="login-form-registerBtn" onClick={this.goToRegister}>
                  没有账号？去注册
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }

  onFinish = (user) => {
    this.props.receive_user(user)
  }

  goToRegister = () => {
    // console.log(this.props)
    this.props.history.replace('/register')
  }
}

export default connect(
  state => {
    // console.log(state.user, 'Login容器user')
    return {user: state.user}
  },
  dispatch => {
    return {
      receive_user: user => dispatch(doLogin(user))
    }
  }
)(Login)
