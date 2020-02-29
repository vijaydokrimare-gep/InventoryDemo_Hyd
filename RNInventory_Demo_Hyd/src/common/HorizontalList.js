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

export default class HorizontalList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.props.listData}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({item, index}) => (
            <TouchableOpacity
              key={index}
              style={styles.itemContainer}
              onPress={() => {
                this.props.onPressItem(item);
              }}>
              <View style={styles.logoContainer}>
                <Text style={styles.title}>{item.title}</Text>
              </View>
              <Text style={styles.subHeader}>{item.subTitle}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: 'white',
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    color: 'white',
  },
  subHeader: {
    fontSize: 12,
    textAlign: 'center',
    color: 'white',
    marginTop: 10,
  },
});
