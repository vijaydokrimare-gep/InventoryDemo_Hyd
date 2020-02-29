import React, {useState} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';
import LayoutContainer from './LayoutContainer';
import { FlatGrid } from 'react-native-super-grid';
import { dashboardData} from '../resources/DummyData';
import DashboardCard from '../components/DashboardCard';
const {width} = Dimensions.get('window');

const DashboardContainer = props => {
  return (
    <LayoutContainer title={'DASHBOARD'} isHambergerButton={true}>
        <View style={styles.container}>
        <FlatGrid
        itemDimension={width*0.45}
        items={dashboardData}
        style={styles.gridView}
        // staticDimension={300}
        // fixed
        // spacing={20}
        renderItem={({ item, index }) => (
          <DashboardCard style={styles.itemContainer} item={item}/>
        )}
      />
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
  gridView: {
    flex: 1,
  },
  itemContainer: {
    justifyContent: 'flex-end',
    borderRadius: 5,
    padding: 10,
    height: 150,
  },
  itemName: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  itemCode: {
    fontWeight: '600',
    fontSize: 12,
    color: '#fff',
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
