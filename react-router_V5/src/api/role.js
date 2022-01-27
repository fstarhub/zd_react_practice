import request from '../utils/request'

export default class RoleApi {

  static addRole(data) {
    return request({
      url: '/role/add',
      method: 'post',
      data,
    })
  }

  static getRoles() {
    return request({
      url: '/role',
      method: 'post'
    })
  }
}