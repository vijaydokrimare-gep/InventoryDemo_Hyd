import React from 'react';
import {StyleSheet, ImageBackground} from 'react-native';
import Header from '../common/Header';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {ActionCreators} from '../store/actions';

const LayoutCotainer = props => {
  const style = [styles.container, props.style];
  const {
    children,
    title,
    showBackButton,
    isHambergerButton,
    onPressBack,
  } = props;

  return (
    <ImageBackground
      resizeMode="stretch"
      style={style}
      source={require('../resources/images/background.png')}>
      <Header
        title={title ? title : ''}
        showBackButton={showBackButton}
        isHambergerButton={isHambergerButton}
        platform="android"
        onPressBack={() => {
          onPressBack ? onPressBack() : null;
        }}
        onPressHamburgerButton={() => {
          props.handleDrawerAction(true);
        }}
      />
      {children}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
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

export default connect(mapStateToProps, mapDispatchToProps)(LayoutCotainer);
