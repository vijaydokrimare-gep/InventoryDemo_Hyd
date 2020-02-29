import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

const {width} = Dimensions.get('window');

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  renderLeftButton = () => {
    if (this.props.isHambergerButton) {
      return (
        <TouchableOpacity
          style={styles.hamburger}
          onPress={() => {
            this.props.onPressHamburgerButton();
          }}>
          <Image
            resizeMode="center"
            style={[styles.hamburger, {marginLeft: -10}]}
            source={require('../resources/images/hamburger.png')}
          />
        </TouchableOpacity>
      );
    }
    return <View style={styles.rightButtonContainer} />;
  };

  renderRightButton = () => {
    if (this.props.showBackButton) {
      return (
        <TouchableOpacity
          style={styles.leftButtonContainer}
          onPress={() => {
            this.props.onPressBack();
          }}>
          <Image
            resizeMode="contain"
            style={styles.leftButtonContainer}
            source={require('../resources/images/backArrow.png')}
          />
        </TouchableOpacity>
      );
    }
    return <View style={styles.leftButtonContainer} />;
  };

  render() {
    var containerStyle = styles.container;
    var rowStyle = styles.row;
    if (this.props.isSearchInHeader) {
      containerStyle = [containerStyle, {height: 85}];
      rowStyle = [rowStyle, {height: 40, paddingTop: 10}];
    }
    return (
      <View style={containerStyle}>
        <View style={rowStyle}>
          {this.renderLeftButton()}
          <View style={styles.titleContainer}>
            <Text style={styles.title}>{this.props.title}</Text>
          </View>
          {this.renderRightButton()}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width,
    height: 60,
    backgroundColor: '#000072',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    width: width,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  hamburger: {
    flex: 1.5,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  leftButtonContainer: {
    flex: 1.5,
    width: 40,
    height: 25,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  rightButtonContainer: {
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    width: '100%',
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
