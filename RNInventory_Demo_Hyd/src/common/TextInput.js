import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Dimensions,
  Image,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class InputField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var inputStyle = styles.TextInput;
    if (this.props.showIcon) {
      inputStyle = [inputStyle, {width: '80%'}];
    }
    return (
      <View style={styles.inputContainer}>
        {this.props.showIcon ? (
          <Image
            resizeMode="contain"
            style={styles.icon}
            source={this.props.imgSrc}
          />
        ) : null}
        <TextInput
          style={inputStyle}
          onChangeText={text => {
            this.props.onChangeText(text);
          }}
          value={this.props.value}
          placeholder={this.props.placeholder}
          placeholderTextColor="grey"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 40,
    width: width * 0.8,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: '#38ACEC',
    margin: 5,
  },
  TextInput: {
    // color: 'black',
  },
  icon: {
    width: 20,
    height: 20,
    marginBottom: 5,
    marginRight: 20,
  },
});
