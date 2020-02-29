import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';
const {width} = Dimensions.get('window');

export default class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const btnStyle = [styles.container, this.props.style];
    return (
      <TouchableOpacity
        style={btnStyle}
        onPress={() => {
          this.props.onPressButton();
        }}>
        <Text style={styles.buttonText}>{this.props.buttonText}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: width * 0.6,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffd500',
    borderRadius: 20,
    margin: 5,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
