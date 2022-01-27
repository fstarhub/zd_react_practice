import React, { Component } from 'react'
import { Button, Card, Table } from 'antd'

import UserApi from '../../api/user'

const {Column} = Table

export default class User extends Component {

  state = {
    loading: false,
    userList: [],
    isAddUserModal: false,
  }
  render() {
    const { loading, userList } = this.state
    const title = (
      <span>
        <Button type='primary' onClick={this.addUser}>创建用户</Button>
      </span>
    )
    return (
      <>
        <Card title={title} bordered={false}>
          <Table
            bordered
            loading={loading}
            dataSource={userList}
            rowKey={'role_id'}
            pagination={{
              defaultPageSize: 5,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: [5, 10,15, 20]
            }}
            >
              <Column title="用户名" dataIndex={'user_name'} key="user_name" align='center' />
              <Column title="角色名称" dataIndex={'role_name'} key="role_name" align='center' />
              <Column title="用户电话" dataIndex={'user_phone'} key="user_phone" align='center' />
              <Column title="用户邮箱" dataIndex={'user_mailbox'} key="user_mailbox" align='center' />
              <Column title="创建时间" dataIndex={'createAt'} key="createAt" align='center' />
          </Table>
        </Card>
      </>
    )
  }

  componentDidMount() {
    // this.init()
  }

  init = () => {
    // UserApi.findAll().then((res) => {
    // })
  }

  addUser = () => {
    this.init()
    this.setState({
      isAddUserModal: true
    })
  }
}
