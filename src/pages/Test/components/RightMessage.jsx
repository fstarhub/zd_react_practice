import React, { Component } from 'react'
import { Row, Col, Select, Button, Space } from 'antd'
const { Option } = Select
export default class RightMessage extends Component {
  render() {
    return (
      <div>
        <div className="rightRow">
          <Row>
            <Col offset={15} span={8}>
              <Space>
                <Select defaultValue="lucy" style={{ width: 120 }}>
                  <Option value="jack">Jack</Option>
                  <Option value="lucy">Lucy</Option>
                  <Option value="disabled" disabled>
                    Disabled
                  </Option>
                  <Option value="Yiminghe">yiminghe</Option>
                </Select>
                <Button type="primary" danger>Clock Out</Button>
              </Space>
            </Col>
            <Col offset={15} span={8}>
              <span>05:28:33</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>Star Time 01:99:99 PM Apr 27.2022</span>
            </Col>
          </Row>
          
        </div>
      </div>
    )
  }
}
