// action
import { setUser, removeUser } from '../../utils/cookie'
import { RECEIVE_USER, LOGINOUT_USER } from '../action-types'

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
  return dispatch => {
    setUser({
      create_time: 1628060022887,
      password: '21232f297a57a5a743894a0e4a801fc3',
      username: 'admin',
      id: '610a39764f93334154bb3520'
    })
    dispatch(receive_user({
      create_time: 1628060022887,
      password: '21232f297a57a5a743894a0e4a801fc3',
      username: 'admin',
      id: '610a39764f93334154bb3520'
    }))
  }
}

// 异步退出
export function doLogout (data) {
  return dispatch => {
    removeUser()
    dispatch(login_out(data))
  }
}