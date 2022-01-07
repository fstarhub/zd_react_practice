import React, { Component } from 'react'

import { Layout } from 'antd'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from '@ant-design/icons'
import './index.less'

const { Header } = Layout

export default class HeaderNav extends Component {
  render() {
    return (
      <>
        <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(this.props.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
          </Header>
      </>
    )
  }

  toggle = () => {
    this.props.updateCollapsed()
  }
}
