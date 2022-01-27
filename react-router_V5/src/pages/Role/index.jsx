import React, { Component } from 'react'

import RoleApi from '../../api/role'
import AddForm from '../../components/role/add_form'
import { Card, Table, Button, Modal } from 'antd'
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
              defaultPageSize: 5,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: [5, 10,15, 20]
            }}
            >
              <Column title="角色名称" dataIndex={'role_name'} key="role_name" align='center' />
              <Column title="创建时间" dataIndex={'createdAt'} key="createdAt" align='center' />
              <Column title="更新时间" dataIndex={'updatedAt'} key="updatedAt" align='center' />
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
}
