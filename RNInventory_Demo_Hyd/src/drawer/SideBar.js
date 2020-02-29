import React, {Component} from 'react';
import {Divider} from 'react-native-elements';
import {
  View,
  Image,
  Text,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';
import * as navService from '../services/NavigationService';
import styles from './style';
import {appImages} from '../utils/ImageUtils';

export class SideBar extends Component {
  constructor(props) {
    super(props);
    this.offlineImage = [];
    (this.menuItems = [
      {
        key: 'Dashboard',
        label: 'Dashboard',
        img: appImages.dashboard,
      },
      {
        key: 'CurrentInventory',
        label: 'Current Inventory',
        img: appImages.currentInventory,
      },
      {
        key: 'PurchaseOrder',
        label: 'Purchase Order',
        img: appImages.purchaseOrder,
      },
      {
        key: 'OrderDetails',
        label: 'Order Details',
        img: appImages.orderDetails,
      },
      {
        key: 'ProductSearch',
        label: 'Product Search',
        img: appImages.productSearch,
      },
      {
        key: 'VendorSearch',
        label: 'Vendor Search',
        img: appImages.vendorSearch,
      },
      {
        key: 'Reports',
        label: 'Reports',
        img: appImages.reports,
      },
      {
        key: 'MyProfile',
        label: 'My Profile',
        img: appImages.myProfile,
      },
      {
        key: 'Logout',
        label: 'Logout',
        img: appImages.logout,
      },
    ]),
      (this.state = {
        isUserLoggedIn: true,
      });
  }

  static getDerivedStateFromProps(props, state) {
    if (
      navService.navigatorRef() &&
      !props.login.isUserLoggedIn &&
      props.login.isUserLoggedIn !== state.isUserLoggedIn
    ) {
      navService.replace('Login');
    }
    return {isUserLoggedIn: props.login.isUserLoggedIn};
  }

  actionType(key) {
    this.props.handleDrawerAction(false);
    if (key === 'Logout') {
      Alert.alert(
        'Logout',
        'Are you sure to logout?',
        [
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {
            text: 'Yes',
            onPress: () => {
              this.props.logoutUser();
              navService.replace('Login');
            },
          },
        ],
        {cancelable: false},
      );
    } else {
      navService.replace(key);
    }
  }

  menus(dataValue) {
    return dataValue.map((data, index) => (
      <View key={data.key}>
        <TouchableOpacity
          style={styles.flx_rw_icn}
          onPress={() => this.actionType(data.key)}>
          <Image
            resizeMode="contain"
            style={styles.icon}
            key={data.key}
            fallbackSource={data.img}
            source={data.img}
          />
          <Text style={styles.sideBarText}>{data.label}</Text>
        </TouchableOpacity>
        <Divider style={{backgroundColor: '#d7d7d7'}} />
      </View>
    ));
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.sidebarBack}>
        <View style={styles.userDetail}>
          <TouchableOpacity
            style={styles.closeIconContainer}
            onPress={() => this.props.handleDrawerAction(false)}>
            <Image
              style={styles.closeIcon}
              resizeMode="contain"
              key={'userIcon'}
              fallbackSource={require('../resources/images/menuCross.png')}
              source={require('../resources/images/menuCross.png')}
            />
          </TouchableOpacity>
          <Image
            style={styles.userPic}
            resizeMode="contain"
            key={'userIcon'}
            fallbackSource={require('../resources/images/user.png')}
            source={require('../resources/images/user.png')}
          />
        </View>
        <View style={styles.menuBar}>{this.menus(this.menuItems)}</View>
      </ScrollView>
    );
  }
}

function mapStateToProps(state) {
  return {
    Drawer: state.Drawer,
    login: state.Login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, {})(SideBar);
