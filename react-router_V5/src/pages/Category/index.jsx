import React, { Component } from 'react'
import moment from 'moment'
import './index.less'
import ProductApi from '../../api/product'

import { Table, Space, Pagination, message, Button  } from 'antd'

export default class Category extends Component {
  state = {
    loading: true,
    productTitle: [
      {
        title: '序号',
        width: '70px',
        align: 'center',
        render: (text, record, index) => {
          return index + 1
        },
      },
      {
        title: '商品名称',
        key: 'goods_name',
        dataIndex: 'goods_name',
        align: 'center',
      },
      {
        title: '商品编号',
        key: 'id',
        dataIndex: 'id',
        align: 'center',
      },
      {
        title: '商品价格（元）',
        key: 'goods_price',
        dataIndex: 'goods_price',
        align: 'center',
      },
      {
        title: '商品数量',
        key: 'goods_num',
        dataIndex: 'goods_num',
        align: 'center',
      },
      {
        title: '上架时间',
        key: 'createdAt',
        dataIndex: 'createdAt',
        align: 'center',
        render: (text, record, index) => {
          return moment(text).format('YYYY-MM-DD')
        },
      },
      {
        title: '更新时间',
        key: 'updatedAt',
        dataIndex: 'updatedAt',
        align: 'center',
        render: (text, record, index) => {
          return moment(text).format('YYYY-MM-DD')
        },
      },
      {
        title: '商品状态',
        key: 'deletedAt',
        dataIndex: 'deletedAt',
        align: 'center',
        render: (text, record, index) => {
          if (text) {
            return '已下架'
          } else {
            return '上架中'
          }
        },
      },
      {
        title: '操作',
        key: 'operation',
        align: 'center',
        render: (text, record) => (
          <Space size="middle">
            <Button onClick={this.deleteItem(record)} danger>删除</Button>
          </Space>
        ),
      },
    ],
    productData: [],
    total: 0,
  }
  render() {
    const { loading, productTitle, productData, total} = this.state
    return (
      <>
        <Table
          loading={loading}
          columns={productTitle}
          dataSource={productData}
          bordered
          pagination={false}
        />
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

  componentDidMount() {
    this.pageChange()
    
  }

  pageChange = async(page = 1, pageSize = 10) => {
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

  // 删除商品
  deleteItem = (record) => {
    return async() => {
      const res = await ProductApi.delGoods(record.id)
      if (res.message === '删除商品成功') {
        message.success(res.message)
        this.pageChange()
      } else {
        message.warning(res.message)
      }
    }
  }
}
