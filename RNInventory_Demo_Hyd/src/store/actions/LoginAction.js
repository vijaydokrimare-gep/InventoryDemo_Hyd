import { LOGIN_ACTION, LOGOUT_ACTION } from './constants'

export function loginUser(payload) {
  return {
    type: LOGIN_ACTION,
    payload: payload
  }
}

export function logoutUser() {
  return {
    type: LOGOUT_ACTION,
    payload: {}
  }
}