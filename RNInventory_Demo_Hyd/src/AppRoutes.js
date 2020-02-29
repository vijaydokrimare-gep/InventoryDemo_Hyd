import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {fromRight} from 'react-navigation-transitions';
import SplashScreen from './containers/SplashScreenContainer';
import Login from './containers/LoginContainer';
import Dashboard from './containers/DashboardContainer';
import CurrentInventory from './containers/CurrentInventoryContainer';
import PurchaseOrder from './containers/PurchaseOrderContainer';
import OrderDetails from './containers/OrderDetailsContainer';
import ProductSearch from './containers/ProductSearchContainer';
import VendorSearch from './containers/VendorSearchContainer';
import Reports from './containers/ReportsContainer';

export const navigatorStyle = {
  navigationBarColor: 'black',
  tabBarButtonColor: 'red',
  tabBarSelectedButtonColor: 'red',
  tabBarBackgroundColor: 'white',
  statusBarColor: '#102642',
  navBarTextColor: 'white',
  navBarButtonColor: 'white',
  navBarBackgroundColor: '#163258',
  statusBarTextColorScheme: 'light',
  navBarHidden: true,
};

export const navOptions = {
  gesturesEnabled: false,
  header: null,
};

const Root = createStackNavigator(
  {
    SplashScreen: {
      screen: SplashScreen,
      navigationOptions: navOptions,
    },
    Login: {
      screen: Login,
      navigationOptions: navOptions,
    },
    Dashboard: {
      screen: Dashboard,
      navigationOptions: navOptions,
    },
    CurrentInventory: {
      screen: CurrentInventory,
      navigationOptions: navOptions,
    },
    PurchaseOrder: {
      screen: PurchaseOrder,
      navigationOptions: navOptions,
    },
    OrderDetails: {
      screen: OrderDetails,
      navigationOptions: navOptions,
    },
    ProductSearch: {
      screen: ProductSearch,
      navigationOptions: navOptions,
    },
    VendorSearch: {
      screen: VendorSearch,
      navigationOptions: navOptions,
    },
    Reports: {
      screen: Reports,
      navigationOptions: navOptions,
    }
  },
  {
    transitionConfig: () => fromRight(300),
  },
);

export default createAppContainer(Root);