import React, { Component } from 'react'
import './Header.less'
import { Avatar, Menu, Dropdown } from 'antd';
import { UserOutlined, DownOutlined } from '@ant-design/icons';

export default class Header extends Component {

  render() {

    const menu = (
      <Menu>
        <Menu.Item key="0">我的信息</Menu.Item>
        <Menu.Item key="1">修改密码</Menu.Item>
        <Menu.Divider />
        <Menu.Item key="3">退出</Menu.Item>
      </Menu>
    )

    return (
      <div>
        <div className="logArea">
          WizDpot
        </div>
        <div className="PageTitle">
          myTimeSheet
        </div>
        <div className="timeArea">
          <span>April 20.2018 4:55 PM</span>
          <span className="userImg">
            <Avatar size="large" icon={<UserOutlined />} />
          </span>
          <span>
          <span className='DownImg'>
            <Dropdown overlay={menu} trigger={'click'}>
              <a href='##' className="ant-dropdown-link" onClick={e => e.preventDefault()}><DownOutlined /></a>
            </Dropdown>
          </span>
          </span> 
        </div>
      </div>
    )
  }
}
