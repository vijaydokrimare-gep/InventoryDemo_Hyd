import { LOGIN_ACTION, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_ACTION, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/constants'
// import {fetchNewsData} from "../api"
import { put, takeLatest } from 'redux-saga/effects';

function* handleUserLogin (action) {
  try {
    // Fetch News Data here
    var data = {
      userInfo: {
        name: 'Vijay',
        mobile: '1234567890'
      },
      userType: action.payload.userType
    };
    if(0){
      yield put({ type: LOGIN_FAILURE })
    }else{
      yield put({ type: LOGIN_SUCCESS, data})
    }
  } catch (e) {
    yield put({ type: LOGIN_FAILURE })
  }
}

function* handleUserLogout (action) {
  try {
    // Fetch News Data here
    var data = "Vijay";
    if(0){
      yield put({ type: LOGOUT_FAILURE })
    }else{
      yield put({ type: LOGOUT_SUCCESS, data})
    }
  } catch (e) {
    yield put({ type: LOGOUT_FAILURE })
  }
}

export function* loginUser () {
  yield takeLatest(LOGIN_ACTION, handleUserLogin)
  yield takeLatest(LOGOUT_ACTION, handleUserLogout)
}