import { HANDLE_DRAWER_ACTION } from './constants'

export function handleDrawerAction(isDrawerOpen) {
  return {
    type: HANDLE_DRAWER_ACTION,
    payload: isDrawerOpen
  }
}