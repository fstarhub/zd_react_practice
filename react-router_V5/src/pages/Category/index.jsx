import React, { Component, useContext, useState, useEffect, useRef } from 'react'
import moment from 'moment'
import './index.less'
import ProductApi from '../../api/product'

import { Table, Space, Pagination, message, Button, Input, Popconfirm, Form } from 'antd'

const EditableContext = React.createContext(null)

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);
  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `${title} is required.`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
}
export default class Category extends Component {
  constructor(props) {
    super(props)
    this.columns = [
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
        editable: true,
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
        editable: true,
      },
      {
        title: '商品数量',
        key: 'goods_num',
        dataIndex: 'goods_num',
        align: 'center',
        editable: true,
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
            <Popconfirm title="确定删除当前数据吗" onConfirm={() => this.handDelete(record)} >
            <Button danger>删除</Button>
            </Popconfirm>
            {/* <Button onClick={this.deleteItem(record)} danger>删除</Button> */}
          </Space>
        ),
      },
    ]
    this.state = {
      dataSource: [],
      count:2,
    }
    
  }
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
        editable: true,
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
        editable: true,
      },
      {
        title: '商品数量',
        key: 'goods_num',
        dataIndex: 'goods_num',
        align: 'center',
        editable: true,
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
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell
      }
    }
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col
      }
      return {
        ...col,
        onCell: (record) => ({
          record,
          editable:col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      }
    })
    return (
      <>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          loading={loading}
          columns={columns}
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

  handleSave = async(row) => {
    const id = row.id
    const param = {
      goods_name: row.goods_name,
      goods_price: row.goods_price * 1,
      goods_num: row.goods_num * 1,
      goods_img: row.goods_img
    }
    const res = await ProductApi.updateOne(id, param)
    if (res.message === '修改商品成功') {
      message.success(res.message)
      this.pageChange()
    } else {
      message.warning(res.message)
    }
  }

  handDelete = async(record) => {
    const res = await ProductApi.delGoods(record.id)
    if (res.message === '删除商品成功') {
      message.success(res.message)
      this.pageChange()
    } else {
      message.warning(res.message)
    }
  }
}
