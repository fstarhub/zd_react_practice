import React, { Component } from 'react'
import './index.less'
import ProductApi from '../../api/product'

import { Table, Space, Pagination, message  } from 'antd'
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
    productData: [],
    total: 0,
    // page
  }
  render() {
    const { loading, productTitle, productData, total} = this.state
    return (
      <>
        <Table
          loading={loading}
          // columns={productTitle}
          dataSource={productData}
          bordered
          pagination={false}
        >
          <Column
            title="序号"
            align='center'
            width={'70px'}
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
        <div className="pagination">
          <Pagination
            total={total}
            showSizeChanger
            showQuickJumper
            onChange={this.pageChange}
            showTotal={total => `共 ${total} 条`}
          />
        </div>
        
      </>
    )
  }

  async componentDidMount() {
    const data = {
      pageSize: 10,
      pageNum: 1
    }
    await this.getPageData(data)
    
  }

  pageChange = async(page, pageSize) => {
    const param = {
      pageSize: pageSize,
      pageNum: page
    }
    this.getPageData(param)
  }

  // 获取分页数据
  getPageData = async(param) => {
    const res = await ProductApi.findAllGoods(param)
    if (res.message === 'Success') {
      const data = res.result.list.map(item => {
        item.key = item.id
        return item
      })
      this.setState({total: res.result.total, productData: data, loading: false})
    } else {
      message.warning(res.message)
    }
  }

}
