import React, { Component } from 'react'
import { Button, Card, message, Table, Space, Modal, Popconfirm } from 'antd'

import UpdateForm from '../../components/User/update_form'

import UserApi from '../../api/user'

const {Column} = Table

export default class User extends Component {

  state = {
    loading: false,
    userList: [],
    editUserVisible: false,
    titleName: '',
    user: [],
    addOrEdit: false,  // false: 新增，true: 修改
  }
  render() {
    const { loading, userList, editUserVisible, titleName, user, addOrEdit } = this.state
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
            rowKey={'createdAt'}
            pagination={{
              defaultPageSize: 10,
              showQuickJumper: true,
              showSizeChanger: true,
              pageSizeOptions: [10, 15, 20]
            }}
            >
              <Column title="用户名" dataIndex={'user_name'} key="user_name" align='center' />
              <Column title="角色名称" dataIndex={'role_name'} key="role_name" align='center' />
              <Column title="用户电话" dataIndex={'user_phone'} key="user_phone" align='center' />
              <Column title="用户邮箱" dataIndex={'user_mailbox'} key="user_mailbox" align='center' />
              <Column title="创建时间" dataIndex={'createdAt'} key="createdAt" align='center' />
              <Column title="操作" key="operate" align='center' width={'300px'}
                render={(text) => {
                  return (
                    <Space size="middle">
                      <Button type='primary' onClick={() => { this.editUser(text) }}>修改</Button>
                      <Popconfirm title="确定删除当前用户吗" onConfirm={() => this.deleteUser(text.id, text.user_name)} >
                        <Button danger>删除</Button>
                      </Popconfirm>
                      {/* <Button type='primary' onClick={this.deleteUser(text.id, text.user_name)} danger>删除</Button> */}
                    </Space>
                  )
                }}
              />
          </Table>
        </Card>
        <Modal destroyOnClose footer={null} title={titleName} visible={editUserVisible} onCancel={this.closeEditUserVisible}>
          <UpdateForm user={user} addOrEdit={addOrEdit} closeUpdateUserForm={this.closeEditUserVisible} updateUser={this.updateUser} />
        </Modal>
      </>
    )
  }

  componentDidMount() {
    this.init()
  }

  init = () => {
    UserApi.findAll().then((res) => {
      if (res.message === 'Success') {
        this.setState({userList: res.result})
      } else {
        message.warning(res.message)
      }
    })
  }

  addUser = () => {
    this.setState({
      editUserVisible: true,
      titleName: '新增用户',
      addOrEdit: false,
      user: []
    })
  }

  editUser = (param) => {
    // console.log(param)
    this.setState({
      editUserVisible: true,
      titleName: '修改用户信息',
      user: param,
      addOrEdit: true
    })
  }

  deleteUser = (id, user_name) => {
    const param = {
      id,
      user_name
    }
    UserApi.delOne(param).then(res => {
      if (res.message === 'Success') {
        message.success('删除用户成功')
        this.init()
      } else {
        message.warning(res.message)
      }
    })
    // return () => {
    //   const param = {
    //     id,
    //     user_name
    //   }
    //   UserApi.delOne(param).then(res => {
    //     if (res.message === 'Success') {
    //       message.success('删除用户成功')
    //       this.init()
    //     } else {
    //       message.warning(res.message)
    //     }
    //   })
    // }
  }

  closeEditUserVisible = () => {
    this.setState({
      editUserVisible: false
    })
  }

  updateUser = () => {
    this.init()
  }
}
