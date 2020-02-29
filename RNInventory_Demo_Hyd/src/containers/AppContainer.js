import React, {Component, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';
import Root from '../AppRoutes';
import WithDrawer from '../drawer/WithDrawer';
import * as navService from '../services/NavigationService';

const AppContainer = props => {
  // useEffect(() => {
  //   props.handleDrawerAction(false);
  // }, []);

  return (
    <WithDrawer>
      <Root
        ref={navigatorRef => {
          navService.setTopLevelNavigator(navigatorRef);
        }}
      />
    </WithDrawer>
  );
};

function mapStateToProps(state) {
  return {
    Logout: state.Logout,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);