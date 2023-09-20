import React, { Component } from 'react';

import { Form, Input, Button, Row, Col, message } from 'antd';

import RoleApi from '../../api/role'

export default class Add_form extends Component {
  render() {
    return (
      <>
        <Form
          name='addRole'
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          autoComplete='off'
        >
          <Form.Item
            label="角色名称"
            name="role_name"
            rules={[{ required: true, message: '请输入角色名称' }]}
          >
            <Input />
          </Form.Item>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
            <Button onClick={this.props.closeAddRoleForm}>
                取消
            </Button>
            <Button type="primary" htmlType="submit" style={{ margin: '0 8px' }}>
                添加
            </Button>
            </Col>
          </Row>
          {/* <Form.Item>
            <Button onClick={this.props.handleCancel}>
                取消
            </Button>
            <Button type="primary" htmlType="submit">
                添加
            </Button>
        </Form.Item> */}
        </Form>
      </>
    )
  }

  onFinish = (values) => {
    // console.log(values)
    RoleApi.addRole(values).then(res => {
      if (res.message === '添加角色成功') {
        message.success(res.message)
        this.props.closeAddRoleForm()
      } else {
        message.warning(res.message)
      }
    })
  }
  onFinishFailed = ({ values,errorFields }) => {
    console.log(values, errorFields)
  }
}
