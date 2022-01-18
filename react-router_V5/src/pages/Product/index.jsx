import React, { Component } from 'react'

import { Table, Space, Pagination  } from 'antd'
const { Column } = Table

export default class Product extends Component {

  state = {
    loading: true,
    productTitle: [
      {
        title: '序号',
        dataIndex: 'index',
        render: text => <a>{text}</a>,
      },
      {
        title: '商品名称',
        className: 'column-money',
        dataIndex: 'goods_name',
        align: 'center',
      },
      {
        title: '商品编号',
        className: 'column-money',
        dataIndex: 'id',
        align: 'center',
      },
      {
        title: '商品价格（元）',
        className: 'column-money',
        dataIndex: 'goods_price',
        align: 'center',
      },
      {
        title: '商品数量',
        className: 'column-money',
        dataIndex: 'goods_num',
        align: 'center',
      },
      {
        title: '上架时间',
        className: 'column-money',
        dataIndex: 'createdAt',
        align: 'center',
      },
      {
        title: '更新时间',
        className: 'column-money',
        dataIndex: 'updatedAt',
        align: 'center',
      },
      {
        title: '商品状态',
        className: 'column-money',
        dataIndex: 'deletedAt',
        align: 'center',
      },
    ],
    productData: [
      {
        goods_name: 'lisi'
      },
      {
        goods_name: 'lisi'
      },
      {
        goods_name: 'lisi'
      },
      {
        goods_name: 'lisi'
      },
      {
        goods_name: 'lisi'
      },
      {
        goods_name: 'lisi'
      },
      {
        goods_name: 'lisi'
      },
    ]
  }
  render() {
    const { loading, productTitle, productData} = this.state
    // const data = [
    //   {
    //     key: '1',
    //     index: 'John Brown',
    //     money: '￥300,000.00',
    //     address: 'New York No. 1 Lake Park',
    //   },
    //   {
    //     key: '2',
    //     index: 'Jim Green',
    //     money: '￥1,256,000.00',
    //     address: 'London No. 1 Lake Park',
    //   },
    //   {
    //     key: '3',
    //     index: 'Joe Black',
    //     money: '￥120,000.00',
    //     address: 'Sidney No. 1 Lake Park',
    //   },
    // ];
    return (
      <>
        <Table
          // loading={loading}
          // columns={productTitle}
          dataSource={productData}
          bordered
          pagination={{
            pageSize: 5,
            showQuickJumper: true,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 15, 20]
          }}
        >
          <Column
            title="序号"
            align='center'
            render={(text, record, index) => (
              <Space size="middle">
                {index+1}
              </Space>
            )}
          />
          <Column title="商品名称" dataIndex="goods_name" key="goods_name" align='center' />
          <Column title="商品编号" dataIndex="id" key="id" align='center' />
          <Column title="商品价格(元)" dataIndex="goods_price" key="goods_price" align='center' />
          <Column title="剩余数量" dataIndex="goods_num" key="goods_num" align='center' />
          <Column title="上架时间" dataIndex="createdAt" key="createdAt" align='center' />
          <Column title="更新时间" dataIndex="updatedAt" key="updatedAt" align='center' />
          <Column title="商品状态" dataIndex="deletedAt" key="deletedAt" align='center' />
          <Column
            title="操作"
            key="action"
            align='center'
            render={(text, record) => (
              <Space size="middle">
                <a>Invite {record.lastName}</a>
                <a>Delete</a>
              </Space>
            )}
          />
        </Table>
        {/* <Pagination
          total={85}
          showSizeChanger
          showQuickJumper
          showTotal={total => `Total ${total} items`}
        /> */}
      </>
    )
  }
}
