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

  static test() {
    console.log('ceshi')
  }
}