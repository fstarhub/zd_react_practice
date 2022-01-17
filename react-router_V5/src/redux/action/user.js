// action
import { setUser, removeUser } from '../../utils/cookie'
import { RECEIVE_USER, LOGINOUT_USER } from '../action-types'

// 引入api模块
import UserApi from '../../api/user'

// 登录
export function receive_user(user) {
  return { type: RECEIVE_USER,data: user }
}
// 退出
export const login_out = (data) => {
  return { type: LOGINOUT_USER, data: data}
}


// 异步登录
export const doLogin = (user) => {
  return async dispatch => {
    const res = await UserApi.login(user)
    if (res.message === '用户登录成功') {
      setUser(res.result.userInfo)
      dispatch(receive_user(res.result.userInfo))
    } else {
      setUser('')
      return
    }
  }
}

// 异步退出
export function doLogout (data) {
  return dispatch => {
    removeUser()
    dispatch(login_out(data))
  }
}