import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {FlatGrid} from 'react-native-super-grid';
import * as Animatable from 'react-native-animatable';
const {width} = Dimensions.get('window');

export default class GridView extends Component {
  render() {
    return (
      <FlatGrid
        style={styles.gridView}
        fixed={false}
        itemDimension={width / 2 - 60}
        spacing={20}
        items={this.props.gridData}
        horizontal={this.props.horizontal}
        renderItem={({item, index}) => (
          <Animatable.View animation="zoomIn" duration={1000}>
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => {
                this.props.onPressItem(item);
              }}>
              <View style={styles.titleContainer}>
                <Text numberOfLines={0} style={styles.title}>
                  {item.title}
                </Text>
              </View>
              <View style={styles.logoContainer}>
                <Image
                  resizeMode="contain"
                  style={styles.icon}
                  source={
                    item.src ? item.src : require('../resources/images/08.png')
                  }
                />
                <Text numberOfLines={0} style={styles.subHeader}>
                  {item.subHeader}
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
        )}
      />
    );
  }
}

const styles = StyleSheet.create({
  gridView: {
    flex: 1,
    width: width,
    marginBottom: 10,
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
    borderRadius: 10,
    borderWidth: 0.2,
    borderColor: '#D3D3D3',
  },
  titleContainer: {
    flex: 7,
    width: '100%',
    height: '100%',
    paddingLeft: 5,
    paddingRight: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  logoContainer: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: '400',
    padding: 5,
  },
  subHeader: {
    fontSize: 10,
    color: 'white',
    fontWeight: '400',
    paddingRight: 5,
  },
});
