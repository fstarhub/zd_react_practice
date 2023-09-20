import Cookie from 'js-cookie'

const userKey = 'user'
const userToken = 'token'

// 设置用户信息,有效时间24小时
export function setUser(user) {
  const time = new Date(new Date().getTime() + 24 * 60 * 60 * 1000)
  Cookie.set(userKey, JSON.stringify(user), {expires: time})
}

// 获取用户信息
export function getUser() {
  if (Cookie.get(userKey)) {
    return JSON.parse(Cookie.get(userKey))
  }
}

// 删除用户信息
export function removeUser() {
  Cookie.remove(userKey)
}

// 存储token
export function setToken(token) {
  Cookie.set(userToken, token)
}

// 获取token
export function getToken() {
  return Cookie.get(userToken)
}

// 移除token
export function removeToken() {
  Cookie.remove(userToken)
}