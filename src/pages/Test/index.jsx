/*
 * @Description: 
 * @Autor: fengshuai
 * @Date: 2022-03-14 08:56:03
 * @LastEditors: fengshuai
 * @LastEditTime: 2022-03-14 09:06:42
 */
import React, { Component } from 'react'
import './index.less'
import HeaderArea from './components/Header';
import LeftMessage from './components/LeftMessage';
import RightMessage from './components/RightMessage';
import MessageRow from './components/MessageRow';
import ContentRow from './components/Content';
import { Layout, Row, Col } from 'antd'
const { Header, Content } = Layout;



export default class Test extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header className='headerRow marginClass'>
            <HeaderArea></HeaderArea>
          </Header>
          <Row className='marginClass messageRow' >
            <MessageRow />
          </Row>
          <Row className="marginClass">
            <Col span={14}>
              <LeftMessage />
            </Col>
            <Col span={10}>
              <RightMessage />
            </Col>
          </Row>
          <Content className='marginClass'>
            <ContentRow />
          </Content>
          {/* <Footer className='marginClass'>Footer</Footer> */}
        </Layout>

      </>
    )
  }
}
