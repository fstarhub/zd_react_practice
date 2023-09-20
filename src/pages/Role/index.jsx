/*
 * @Description: 角色页面
 * @Autor: fengshuai
 * @Date: 2022-01-14 09:19:04
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-06-22 10:27:08
 */
import React, { Component } from 'react'
import moment from 'moment'

import RoleApi from '../../api/role'
import AddForm from '../../components/Role/add_form'
import { Card, Table, Button, Modal, Space, Popconfirm, message } from 'antd'
const { Column } = Table

export default class Role extends Component {
  state = {
    loading: false,
    roleList: [],
    isAddRole: false
  }

  componentDidMount() {
    this.getAllRoles()
  }
  render() {
    const { loading, roleList, isAddRole } = this.state
    const title = (
      <span>
        <Button type='primary' onClick={this.addUser}>添加角色</Button>
      </span>
    )
    return (
      <>
        <Card title={title} bordered={false} >
          <Table
            bordered
            loading={loading}
            dataSource={roleList}
            rowKey={'role_id'}
            rowSelection={{
              type: 'radio',
              onSelect: (rowRole) => {console.log(rowRole)},
              selectedRowKeys: []
            }}
            pagination={{
              defaultPageSize: 10,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: [10, 15, 20]
            }}
            >
              <Column title="角色名称" dataIndex={'role_name'} key="role_name" align='center' />
              <Column title="创建时间" dataIndex={'createdAt'} key="createdAt" align='center' render={(text) => {
                return moment(text).format('YYYY-MM-DD hh:mm:ss')
              }} />
              <Column title="更新时间" dataIndex={'updatedAt'} key="updatedAt" align='center' render={(text) => {
                return moment(text).format('YYYY-MM-DD hh:mm:ss')
              }} />
              <Column title="操作"  key="operator" align='center'
                render={(text) => {
                  return (
                    <Space size="middle">
                      <Popconfirm title="确定删除当前角色吗" onConfirm={() => this.deleteRole(text.role_id)} >
                        <Button danger>删除</Button>
                      </Popconfirm>
                    </Space>
                  )
                }}
              />
          </Table>
        </Card>
        <Modal destroyOnClose title="添加角色" visible={isAddRole} onCancel={this.handleCancel} footer={null}>
          <AddForm closeAddRoleForm={this.closeAddRoleForm} />
        </Modal>
      </>
    )
  }

  getAllRoles = () => {
    RoleApi.getRoles().then(res => {
      if (res.message === 'Success') {
        this.setState({
          roleList: res.result
        })
      }
    })
  }

  addUser = () => {
    this.setState({
      isAddRole: true
    })
  }

  // handleOk = () => {
  //   this.setState({
  //     isAddRole: false
  //   })
  // }

  handleCancel = () => {
    this.setState({
      isAddRole: false
    })
  }

  closeAddRoleForm = () => {
    this.setState({
      isAddRole: false
    })
    this.getAllRoles()
  }

  deleteRole = (role_id) => {
    RoleApi.delRole({role_id}).then(res => {
      if (res.message === 'Success') {
        message.success('删除成功')
        this.getAllRoles()
      } else {
        message.warning(res.message)
      }
    })
  }
}
