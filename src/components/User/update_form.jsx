import React, { Component } from 'react';

import UserApi from '../../api/user';
import RoleApi from '../../api/role';
import { Form, Input, Button, Row, Col, message, Select } from 'antd';
const { Option } = Select



export default class Update_form extends Component {
  formRef = React.createRef()

  state = {
    roleList: []
  }

  componentDidMount() {
    this.init()
  }
  render() {
    const { roleList } = this.state
    const { user, addOrEdit } = this.props
    return (
      <>
        <Form
          name='updateUser'
          ref={this.formRef}
          labelCol={{span: 5}}
          wrapperCol={{span: 19}}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
          initialValues={{
            user_name: addOrEdit ? user.user_name : '',
            password: '',
            is_admin: addOrEdit ? user.is_admin : '',
            user_phone: addOrEdit ? user.user_phone : '',
            user_mailbox: addOrEdit ? user.user_mailbox : '',
            role_id: addOrEdit ? user.role_id : '',
          }}
          autoComplete='off'
        >
          <Form.Item
            label="用户名"
            name="user_name"
            rules={[{ required: true, message: '请输入用户名' }]}
          >
            <Input disabled={addOrEdit} />
          </Form.Item>
          {
            !addOrEdit ? (<Form.Item
              label="密码"
              name="password"
              rules={[{ required: true, message: '请输入用户密码' }]}
            >
              <Input.Password autoComplete="true" />
            </Form.Item>) : (<></>)
          }
           {/* <Form.Item
             label="密码"
             name="password"
             rules={[{ required: true, message: '请输入用户密码' }]}
           >
             <Input.Password autoComplete="true" />
           </Form.Item> */}
          <Form.Item
            label="是否管理员"
            name="is_admin"
            rules={[{ required: true, message: '此选项必填' }]}
          >
            <Select
              placeholder="请选择用户的权限"
              // onChange={this.onGenderChange.bind(this)}
              allowClear
            >
              <Option key={1} value={1}>管理员</Option>
              <Option key={0} value={0}>普通用户</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="用户电话"
            name="user_phone"
            rules={[{ required: true, message: '请输入用户的电话号码' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="用户邮箱"
            name="user_mailbox"
            rules={[{ required: true, message: '请输入用户的邮箱' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="角色"
            name="role_id"
            rules={[{ required: true, message: '用户角色不能为空' }]}
          >
            <Select
              placeholder="请选择用户的角色"
            >
              {
                roleList.map(item => {
                  return (<Option key={item.role_id} value={item.role_id}>{item.role_name}</Option>)
                })
              }
            </Select>
          </Form.Item>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
            <Button onClick={this.props.closeUpdateUserForm}>
              取消
            </Button>
            <Button type="primary" htmlType="submit" style={{ margin: '0 8px' }}>
              {this.props.addOrEdit ? '更新' : '添加'}
            </Button>
            </Col>
          </Row>
        </Form>
      </>
    )
  }

  init = () => {
    RoleApi.getRoles().then(res => {
      if (res.message === 'Success') {
        this.setState({
          roleList: res.result
        })
      } else {
        message.warning(res.message)
      }
    })
  }

  onFinish = (param) => {
    if (!this.props.addOrEdit) {
      UserApi.newAdd(param).then(res => {
        if (res.message === 'Success') {
          message.success('新增用户成功')
          this.props.closeUpdateUserForm()
          this.props.updateUser() // 刷新页面
        } else {
          message.warning(res.message)
        }
      })
    } else {
      UserApi.editOne(param).then(res => {
        if (res.message === 'Success') {
          message.success('修改用户信息成功')
          this.props.closeUpdateUserForm()
          this.props.updateUser() // 刷新页面
        } else {
          message.warning(res.message)
        }
      })
    }
  }
  onFinishFailed = () => {

  }
  onGenderChange = (values) => {
    console.log('aaaa', values)
    switch(values) {
      case 1:
        this.formRef.current.setFieldsValue({
          note: 'Hi, man!',
        })
        return;
      case 0:
        this.formRef.current.setFieldsValue({
          note: 'Hi, fman!',
        })
        return;

      default: 
        return 'male'
    }
  }
}
