import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import CardView from 'react-native-cardview'
import {colors} from '../resources/AppUtils';
const {width} = Dimensions.get('window');

const LeaderboardCell = props => {
    const {style} = props;
  const {
    key, name, code, srcImg
  } = props.item;

  return (
    <TouchableOpacity
      key={key}>
        <CardView
        style={[
            styles.container,
            style,
            {backgroundColor: code},
          ]}
          cardElevation={6}
          cardMaxElevation={4}
          cornerRadius={5}>
          <Image
            style={styles.categoryIcon}
            resizeMode="contain"
            key={'userIcon'}
            fallbackSource={srcImg}
            source={srcImg}
          />
          <Text style={styles.header}>
              {name}
          </Text>
        </CardView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    marginTop: 20,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: colors.white,
  },
  categoryIcon: {
    width: '30%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default LeaderboardCell;