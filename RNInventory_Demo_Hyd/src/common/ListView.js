import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
const {width} = Dimensions.get('window');

export default class ListView extends Component {
  render() {
    var itemContainerStyle = styles.itemContainer;
    var rightArrowStyle = styles.rightArrow;
    if (this.props.isSearch) {
      itemContainerStyle = [
        itemContainerStyle,
        {borderBottomWidth: 0, justifyContent: 'space-between'},
      ];
      rightArrowStyle = [rightArrowStyle, {width: 4, height: 20}];
    }
    return (
      <FlatList
        style={styles.listView}
        data={this.props.listData}
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        renderItem={({item, index}) => (
          <TouchableOpacity
            key={index}
            style={itemContainerStyle}
            onPress={() => {
              this.props.onPressItem(item);
            }}>
            {!this.props.isSearch ? (
              <Image
                resizeMode="stretch"
                style={styles.categoryLogo}
                source={item.src}
              />
            ) : null}
            <Text style={styles.title}>{item.title}</Text>
            <Image
              resizeMode="stretch"
              style={rightArrowStyle}
              source={
                this.props.isSearch
                  ? require('../resources/images/09.png')
                  : require('../resources/images/09.png')
              }
            />
          </TouchableOpacity>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  listView: {
    flex: 1,
    marginTop: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    padding: 20,
    borderBottomWidth: 0.8,
    borderBottomColor: '#D3D3D3',
  },
  categoryLogo: {
    flex: 1,
    width: 30,
    height: 30,
  },
  title: {
    flex: 8,
    marginLeft: 20,
    fontSize: 15,
    color: 'grey',
    fontWeight: '400',
    padding: 5,
  },
  rightArrow: {
    flex: 1,
    width: 15,
    height: 30,
  },
});
