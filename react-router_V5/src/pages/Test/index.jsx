import React, { Component } from 'react'
import './index.less'
import HeaderArea from './components/Header';
import LeftMessage from './components/LeftMessage';
import RightMessage from './components/RightMessage';
import { Layout, Row, Col } from 'antd'
const { Header, Footer, Content } = Layout;



export default class Test extends Component {
  render() {
    return (
      <>
        <Layout>
          <Header className='headerRow marginClass'>
            <HeaderArea></HeaderArea>
          </Header>
          <Row className="messageRow marginClass"s>
            <Col span={14}>
              <LeftMessage />
            </Col>
            <Col span={10}>
              <RightMessage />
            </Col>
          </Row>
          <Content className='marginClass'>
            content
          </Content>
          {/* <Footer className='marginClass'>Footer</Footer> */}
        </Layout>

      </>
    )
  }
}
