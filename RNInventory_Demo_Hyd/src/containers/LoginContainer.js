import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';
import * as navService from '../services/NavigationService';
import Button from '../common/Button';
import TextInput from '../common/TextInput';
import {colors} from '../resources/AppUtils';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isUserLoggedIn: false,
    };
  }

  // static getDerivedStateFromProps(props, state) {
  //   if (
  //     props.login.isUserLoggedIn &&
  //     props.login.isUserLoggedIn !== state.isUserLoggedIn
  //   ) {
  //     navService.replace('Home');
  //   }
  //   return {isUserLoggedIn: props.login.isUserLoggedIn};
  // }

  _onLoginButtonPressed = () => {
    // this.props.loginUser();
    navService.replace('Dashboard');
  };

  _onChangeUsername = text => {
    this.setState({username: text});
  };

  _onChangePassword = text => {
    this.setState({password: text});
  };

  render() {
    return (
      <ImageBackground
        resizeMode="stretch"
        style={styles.container}
        source={require('../resources/images/background.png')}>
        <View style={styles.contents}>
          <Text style={styles.header}>LOGIN</Text>
          <TextInput
            value={this.state.username}
            placeholder="Username"
            showIcon={true}
            imgSrc={require('../resources/images/01.png')}
            onChangeText={text => {
              this._onChangeUsername(text);
            }}
          />
          <TextInput
            value={this.state.username}
            placeholder="Password"
            showIcon={true}
            imgSrc={require('../resources/images/01.png')}
            onChangeText={text => {
              this._onChangePassword(text);
            }}
          />
          <Button
            buttonText={'LOGIN'}
            onPressButton={() => {
              this._onLoginButtonPressed();
            }}
          />
        </View>
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
  contents: {
    flex: 1,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 150,
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 20,
    marginBottom: 20,
  },
  forgotPasswordContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginTop: 5,
    marginBottom: 5,
  },
  noAccountContainer: {
    position: 'absolute',
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  noAccount: {
    fontSize: 15,
    color: 'grey',
    textAlign: 'right',
  },
  signUp: {
    fontSize: 15,
    fontWeight: '700',
    color: colors.themeBlue,
    textAlign: 'right',
  },
});

function mapStateToProps(state) {
  return {
    login: state.Login,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
