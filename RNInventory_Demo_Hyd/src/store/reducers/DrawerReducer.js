import {HANDLE_DRAWER_ACTION} from '../actions/constants';

const initialState = {
  isDrawerOpen: false,
};

export default function handleDrawerAction(state = initialState, action) {
  switch (action.type) {
    case HANDLE_DRAWER_ACTION:
      return {
        ...state,
        isDrawerOpen: action.payload,
      };
    default:
      return state;
  }
}
