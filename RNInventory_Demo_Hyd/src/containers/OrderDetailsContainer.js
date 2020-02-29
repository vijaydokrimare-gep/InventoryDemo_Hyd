import React, {useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';
import LayoutContainer from './LayoutContainer';

const OrderDetailsContainer = props => {
  return (
    <LayoutContainer title={'ORDER DETAILS'} isHambergerButton={true}>
      <View style={styles.container}>
        <Text>This is order details screen</Text>
      </View>
    </LayoutContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
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

export default connect(mapStateToProps, mapDispatchToProps)(OrderDetailsContainer);
