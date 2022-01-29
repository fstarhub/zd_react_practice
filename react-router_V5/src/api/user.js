import request from '../utils/request'

export default class UserApi {
  static login(data) {
    return request({
      url: '/users/login',
      method: 'post',
      data: data,
    })
  }

  static register(data) {
    return request({
      url: '/users/register',
      method: 'post',
      data: data
    })
  }

  static modifyPassword(data) {
    return request({
      url: '/users/',
      method: 'patch',
      data: data
    })
  }

  static findAll() {
    return request({
      url: '/users/findAll',
      method: 'post',
    })
  }

  // 新增用户
  static newAdd(data) {
    return request({
      url: '/users/newAdd',
      method: 'post',
      data,
    })
  }
  // 删除用户
  static delOne(data) {
    return request({
      url: '/users/delOne',
      method: 'post',
      data,
    })
  }

  static test() {
    console.log('ceshi')
  }
}