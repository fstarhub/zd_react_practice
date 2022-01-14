// 引入createStore,用于创建和兴store对象
import { createStore, applyMiddleware } from 'redux'

// 引入redux-thunk,用于支持异步action
import thunk from 'redux-thunk'

// 引入汇总后的reducer
import reducer from './reducer/index'

// 引入redux-devtools-extension，使用redux扩展调试
import { composeWithDevTools } from 'redux-devtools-extension'

export default createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))