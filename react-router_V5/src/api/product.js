import request from '../utils/request'

export default class ProductApi {
  // 查询所有商品
  static findAllGoods(data) {
    return request({
      url: '/goods/findAllGoods',
      method: 'get',
      params: data
    })
  }

  // 删除商品
  static delGoods(id) {
    return request({
      url: '/goods/' + id,
      method: 'delete'
    })
  }

  // 发布商品
  static publishItemGoods(data) {
    return request({
      url: '/goods/',
      method: 'post',
      data: data
    })
  }

  // 下架商品
  static offShelf(id) {
    return request({
      url: '/goods/' + id + '/off',
      method: 'post'
    })
  }

  // 上架商品
  static onShelf(id) {
    return request({
      url: '/goods/' + id + '/on',
      method: 'post'
    })
  }

  // 更新商品
  static updateOne(id, param) {
    console.log(id, param)
    return request({
      url: '/goods/' + id,
      method: 'put',
      data: param
    })
  }
}