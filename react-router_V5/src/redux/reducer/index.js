// 引入combineReducers,用户汇总reducer
import { combineReducers } from "redux"

// 引入为User容器组件服务的reducer
import user from './user'

// 暴露汇总后的reducer
export default combineReducers({
  user:user
})