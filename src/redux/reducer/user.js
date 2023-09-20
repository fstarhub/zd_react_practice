import { getUser } from "../../utils/cookie"
import { RECEIVE_USER, LOGINOUT_USER } from "../action-types"

const initUser = getUser() === undefined ? '' : getUser()

export default function user(preState = initUser, action) {
  console.log(preState, 'preState', action, 'user-action')
  switch (action.type) {
    case RECEIVE_USER:
      return action.data

    case LOGINOUT_USER:
      return action.data

    default:
      return preState
  }
}