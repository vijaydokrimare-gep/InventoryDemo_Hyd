import {
  LOGIN_ACTION,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_ACTION,
} from '../actions/constants';

const initialState = {
  error: false,
  isLoginInProgress: false,
  response: '',
  isUserLoggedIn: false,
};

export default function fetNewsData(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        error: false,
        isUserLoggedIn: false,
        isLoginInProgress: true,
        response: '',
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: false,
        isLoginInProgress: false,
        isUserLoggedIn: true,
        response: action.data,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: true,
        isLoginInProgress: false,
        isUserLoggedIn: false,
        response: '',
      };
    case LOGOUT_ACTION:
      return {
        ...state,
        error: false,
        isLoginInProgress: false,
        isUserLoggedIn: false,
        response: '',
      };
    default:
      return state;
  }
}
