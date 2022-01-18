import React, { Component } from 'react'

import { Form, Input, Button, message } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

import UserApi from '../../api/user'

import './index.less'

export default class Register extends Component {
  render() {
    return (
      <div className='register'>
        <section className="register-content">
          <h2>欢迎注册洋码头</h2>
          <div>
            <Form
              name="normal_login"
              className="register-form"
              initialValues={{
                remember: true,
              }}
              onFinish={this.onFinish}
            >
              <Form.Item
                name="user_name"
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入用户名" />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: '请输入密码!',
                  },
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="请输入密码"
                  autoComplete="true"
                />
              </Form.Item>

              <Form.Item>
                <Button type="primary" htmlType="submit" className="register-form-button">
                  注 册
                </Button>
              </Form.Item>
              <Form.Item>
                <Button type="primary" ghost className="login-form-registerBtn" onClick={this.goToLogin}>
                  已有账号，去登陆！
                </Button>
              </Form.Item>
            </Form>
          </div>
        </section>
      </div>
    )
  }

  onFinish = async(param) => {
    const res = await UserApi.register(param)
    if (res.message === '用户创建成功') {
      message.success('用户创建成功')
      this.props.history.replace('/login')
    } else {
      message.error(res.message)
    }
  }
  goToLogin= () => {
    this.props.history.replace('/login')
  }
}
