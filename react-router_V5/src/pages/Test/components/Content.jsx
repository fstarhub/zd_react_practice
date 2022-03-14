import React, { Component } from 'react'
import './Content.less'
import { Row, Col, Table } from 'antd'

export default class Content extends Component {
  render() {

    const columns = [
      {
        title: 'Name：',
        children: [
          {
            title: 'BRANCH:',
            dataIndex: 'BRANCH',
            key: 'BRANCH',
            children: [
              {
                title: 'DEPARTMENT:',
                dataIndex: 'DEPARTMENT',
                key: 'DEPARTMENT',
                children: [
                  {
                    title: 'PERIOD:',
                    dataIndex: 'PERIOD',
                    key: 'PERIOD',
                    children: [
                      {
                        title: '',
                        dataIndex: 'a1',
                        key: 'a1',
                        // children: [
                        //   {
                        //     title: 'PERIOD:',
                        //     dataIndex: 'PERIOD',
                        //     key: 'PERIOD',
                        //   }
                        // ]
                      }
                    ]
                  },
                ]
              },
            ]
          },
        ]
      },
      {
        title: 'Allon Jone',
        align: 'left',
        children: [
          {
            title: 'MIAMI:FL(345)',
            dataIndex: 'MIAMI:FL(345)',
            key: 'MIAMI:FL(345)',
            align: 'left',
            children: [
              {
                title: 'MARKEDING',
                dataIndex: 'MARKEDING',
                key: 'MARKEDING',
                align: 'left',
                children: [
                  {
                    title: '4/3/2022-3/5/2222',
                    dataIndex: '4/3/2022-3/5/2222',
                    key: '4/3/2022-3/5/2222',
                    align: 'left',
                    children: [
                      {
                        title: 'Sun Apr 4.2022',
                        dataIndex: 'Sun Apr 4.2022',
                        key: 'Sun Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Mon Apr 4.2022',
                        dataIndex: 'Mon Apr 4.2022',
                        key: 'Mon Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Tue Apr 4.2022',
                        dataIndex: 'Tue Apr 4.2022',
                        key: 'Tue Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Wed Apr 4.2022',
                        dataIndex: 'Wed Apr 4.2022',
                        key: 'Wed Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Thu Apr 4.2022',
                        dataIndex: 'Thu Apr 4.2022',
                        key: 'Thu Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Fri Apr 4.2022',
                        dataIndex: 'Fri Apr 4.2022',
                        key: 'Fri Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Sat Apr 4.2022',
                        dataIndex: 'Sat Apr 4.2022',
                        key: 'Sat Apr 4.2022',
                        align: 'center',
                      },
                      {
                        title: 'Total Hours',
                        dataIndex: 'Total Hours',
                        key: 'Total Hours',
                        align: 'center',
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
    
    const data = []
    for (let i = 0; i < 5; i++) {
      data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
      });
    }
    
    return (
      <div>
        <Row className='weeklyClass'>
          <Col span={4}>
          <span className='leftTitle'>WEEKLY TIMESHEET</span>
          </Col>
          <Col offset={14} span={6}>
            <span className='rightTitle'>Not Submitted Due on: Apr 20.2022 XXX</span>
          </Col>
        </Row>
        <Table
          columns={columns}
          dataSource={data}
          bordered
          pagination={false}
          // title={() => 'Header'}
          // footer={() => 'Footer'}
        />
        <div className='footClass'>
          Timesheet Changes
        </div>
        <div className='footRowFirst'>
          <span>There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real!</span>
        </div>
        <div className='footRowFirst footRowSecond'>
          <span>There are moments in life when you miss someone so much that you just want to pick them from your dreams and hug them for real!</span>
        </div>
        <Row className='footLast'>
          <Col className='footLastCol one' span={8}>
          <span>Employee Signature:</span>
          </Col>
          <Col className='footLastCol two' span={4}>
            <span>Date:</span>
          </Col>
          <Col className='footLastCol three' span={8}>
            <span>Approve Singature:</span>
          </Col>
          <Col className='footLastCol four' span={4}>
            <span>Date:</span>
          </Col>
        </Row>
      </div>
    )
  }
}
