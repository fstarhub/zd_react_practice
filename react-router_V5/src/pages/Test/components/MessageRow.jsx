import React, { Component } from 'react'
import './MessageRow.less'
import { DatePicker, Space } from 'antd'
import moment from 'moment'

export default class MessageRow extends Component {
  render() {

    const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY']
    return (
      <div className='messageRoot'>
        <span className='boldClass'>Allen.Jone</span>&nbsp;&nbsp;
        <span className='greenClass'>98.9%</span>&nbsp;&nbsp;
        <span>Attendance Rate</span>&nbsp;
        <span className='greenClass'>0.67%</span>&nbsp;&nbsp;
        <span>Computer Idle Time</span>
        <div className='dataClass'>
          <span>Date: &lt;</span>
          <Space direction="vertical" size={12}>
            <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
          </Space>
          <span>&gt;</span>
        </div>
      </div>
    )
  }
}
