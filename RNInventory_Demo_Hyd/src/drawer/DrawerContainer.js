import React, { Component } from "react";
import Drawer from "react-native-drawer";

const drawerStyles = {
  drawer: { shadowColor: "#000000", shadowOpacity: 0.8, shadowRadius: 1 },
};

export default class DrawerContainer extends Component<Props> {
  render() {
    const {
      position,
      drawerView,
      children,
      open,
      onOpenStart,
      onCloseStart,
    } = this.props;
    return (
      <Drawer
        type="overlay"
        side={position}
        ref={ref => (this._drawer = ref)}
        open={open}
        content={drawerView}
        tapToClose={true}
        openDrawerOffset={0.4} // 40% gap on the right side of drawer
        panCloseMask={0.2}
        closedDrawerOffset={0}
        onOpenStart={onOpenStart}
        onCloseStart={onCloseStart}
        styles={drawerStyles}
        tweenHandler={ratio => ({
          main: { opacity: (2 - ratio) / 2 },
        })}
      >
        {children}
      </Drawer>
    );
  }
}