import React, { Component } from 'react'
import './index.less'
import { connect } from 'react-redux'
import { Routes, Route, Navigate } from 'react-router-dom'

import { Form, Input, Button, Checkbox } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
// import './index.less'

import logo from './images/logo.png'

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
      <div className='login'>
        <header>
          <img src={logo} alt="logo" />
          <h1>购物吧：后台管理系统</h1>
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
                name="username"
                rules={[
                    {required: true, message: '请输入用户名称'},
                    {min: 4, message: '最少长度为4位'},
                    {max: 12, message: '最大长度为12位'},
                    {pattern: /^[0-9a-zA-Z_]{1,}$/, message: '必须为数字，字母，下划线组成'},
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="Username"/>
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                    {required: true, whitespace: false, message: 'Please input your Username!'},
                    {min: 4, message: '最少长度为4位'},
                    {max: 12, message: '最大长度为12位'},
                    {pattern: /^[0-9a-zA-Z_]{1,}$/, message: '必须为数字，字母，下划线组成'},
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon"/>}
                  type="password"
                  placeholder="Password"
                  autoComplete="true"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }

  onFinish = () => {
    console.log('sbmit')
  }
}

export default connect(
  state => {
    console.log(state.user, 'Login容器user')
    return {user: state.user}
  },
  dispatch => {
    return {

    }
  }
)(Login)
