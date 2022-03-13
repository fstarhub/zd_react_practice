import React, { Component } from 'react'
import { Table } from 'antd'
const { Column, ColumnGroup } = Table

export default class LeftMessage extends Component {
  render() {

    const data = [
      {
        key: '1',
        firstName: 'John Brown',
        lastName: '￥300,000.00',
      },
    ];
    return (
      <div>
        <Table
          dataSource={data}
          bordered
          pagination={false}
        >
          <ColumnGroup title="Name">
          <Column title="Week（Apr 24.2016 - Apr 30.2016）" dataIndex="firstName" key="firstName" />
          <Column title="Pay Period（Apr 24.2016 - Apr 30.2016）" dataIndex="lastName" key="lastName" />
        </ColumnGroup>
        </Table>
      </div>
    )
  }
}
