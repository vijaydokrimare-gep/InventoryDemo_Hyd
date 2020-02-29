import {combineReducers} from 'redux';
import LoginReducer from './LoginReducer';
import DrawerReducer from './DrawerReducer';

const rootReducer = combineReducers({
  Login: LoginReducer,
  Drawer: DrawerReducer,
});

export default rootReducer;
