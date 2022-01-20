import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

import Logo from '../../pages/Login/images/logo.png'


import './index.less'
import { Menu, Layout } from 'antd'
// import {
//   MenuUnfoldOutlined,
//   MenuFoldOutlined,
//   UserOutlined,
//   VideoCameraOutlined,
//   UploadOutlined,
// } from '@ant-design/icons'
// import Item from 'antd/lib/list/Item'
import menuList from '../../config/menu'
const { Sider } = Layout
const { SubMenu } = Menu

class SiderNav extends Component {

  constructor(props) {
    super(props)
    this.menuNodes = this.getMenuList(menuList)
  }

  // state = {
  //   menuList: [],
  // }

  // 生成菜单栏
  getMenuList = (menuList) => {
    // 获取选择的路由路径
    const pathname = this.props.location.pathname
    return menuList.map(item => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key} icon={item.icon}>
            <Link to={item.key}>
            {item.title}
            </Link>
          </Menu.Item>
        )
      } else {
        // 查找与路由匹配得菜单
        const childItem = item.children.find(child => pathname.indexOf(child.key) === 0)
        console.log(childItem, 'childItem')
        if (childItem) { // 如果存在，需要展开当前菜单
          this.openKey = item.key
        }
        return (
          <SubMenu key={item.key} icon={item.icon} title={item.title}>
            {
              this.getMenuList(item.children)
            }
          </SubMenu>
        )
      }
    })
  }
  render() {
    // console.log(this.props, 'siderNav')
    // 获取当前选择得路由路径
    const pathname = this.props.location.pathname
    // 得到需要展开的菜单key
    const openKey = this.openKey
    console.log(openKey, 'openkey', typeof(openKey))
    return (
      <>
        <Sider trigger={null} collapsible collapsed={this.props.collapsed}>
          <div className="logo">
            <img className='logoImg' src={Logo} alt="购物吧" />
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['/home']} defaultOpenKeys={[this.openKey]} selectedKeys={[pathname]}>
            {/* {
              this.state.menuList
            } */}
            { this.menuNodes }
          </Menu>
        </Sider>
      </>
    )
  }

  componentDidMount() { // 此方法渲染菜单，在刷新时默认展开菜单无效
    // const list = this.getMenuList(menuList)
    // console.log(list, 'list')
    // this.setState({menuList: list})
  }
}

// withRouter让一般组件有路由组件的属性
export default withRouter(SiderNav)