import React, {Component} from 'react';
import {StyleSheet, ImageBackground, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';
import * as navService from '../services/NavigationService';

const {width} = Dimensions.get('window');

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.timer = null;
  }

  componentDidMount() {
    this.updateNavigationStatus();
    this.timer = setInterval(() => {
      this.updateNavigationStatus();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateNavigationStatus = () => {
    if (navService.navigatorRef()) {
      clearInterval(this.timer);
      if (this.props.login.isUserLoggedIn) {
        navService.replace('Home');
      } else {
        navService.replace('Login');
      }
    }
  };

  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require('../resources/images/background.png')}
      >
        <Image
        resizeMode="stretch"
        style={styles.inventoryLogo}
        source={require('../resources/images/inventory.png')}
      />
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inventoryLogo:{
    width: width*0.5,
    height: width*0.35
  }
});

function mapStateToProps(state) {
  return {
    login: state.Login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
