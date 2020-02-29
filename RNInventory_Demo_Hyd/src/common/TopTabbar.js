import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
const {width, height} = Dimensions.get('window');

export default class TopTabbar extends Component {
  constructor(props) {
    super(props);
  }

  renderHighlightHeadar = tab => {
    if (tab.isSelected) {
      return <View style={styles.tabHeader} />;
    }
    return null;
  };

  renderTabText = tab => {
    let tabTextStyle = styles.buttonText;
    if (tab.isSelected) {
      tabTextStyle = [tabTextStyle, {color: 'orange'}];
    }
    return <Text style={tabTextStyle}>{tab.header}</Text>;
  };

  renderTabs = () => {
    return this.props.tabs.map((tab, index) => {
      return (
        <TouchableOpacity
          onPress={() => {
            this.props.onPressTab(tab);
          }}>
          {this.renderTabText(tab)}
          {this.renderHighlightHeadar(tab)}
        </TouchableOpacity>
      );
    });
  };

  render() {
    return <View style={styles.container}>{this.renderTabs()}</View>;
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: width * 0.92,
    height: 40,
    justifyContent: 'space-between',
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '600',
    color: 'grey',
  },
  tabHeader: {
    height: 2,
    marginTop: 5,
    marginBottom: 5,
    backgroundColor: 'orange',
  },
});
