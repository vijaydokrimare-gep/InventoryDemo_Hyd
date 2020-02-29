import React from 'react';
import SideBar from './SideBar';
import {BackHandler} from 'react-native';
import DrawerContainer from './DrawerContainer';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';

class WithDrawer extends React.Component {
  onCloseStart() {
    if (this.props.isDrawerOpen) {
      this.props.handleDrawerAction(false);
      BackHandler.removeEventListener(
        'hardwareBackPress',
        this.handleBackButtonClick.bind(this),
      );
    }
  }

  onOpenStart() {
    BackHandler.addEventListener(
      'hardwareBackPress',
      this.handleBackButtonClick.bind(this),
    );
  }

  handleBackButtonClick() {
    if (this.props.Drawer.isDrawerOpen) {
      this.onCloseStart();
      return true;
    }
    return false;
  }

  sideBarView() {
    return <SideBar {...this.props} />;
  }

  render() {
    const {isDrawerOpen} = this.props.Drawer;
    return (
      <DrawerContainer
        position="left"
        open={isDrawerOpen}
        // handleDrawer={this.props.handleDrawer}
        onCloseStart={() => this.onCloseStart()}
        onOpenStart={() => this.onOpenStart()}
        drawerView={this.sideBarView()}>
        {this.props.children}
      </DrawerContainer>
    );
  }
}

function mapStateToProps(state) {
  return {
    Drawer: state.Drawer,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(ActionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(WithDrawer);
