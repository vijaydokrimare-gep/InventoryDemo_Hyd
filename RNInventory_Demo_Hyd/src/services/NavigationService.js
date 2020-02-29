import {StackActions, NavigationActions} from 'react-navigation';
let _navigator;

export function setTopLevelNavigator(navigatorRef) {
  _navigator = navigatorRef;
}

export const navigatorRef = () => {
  return _navigator;
};

export const pushScreen = (screen, params) => {
  _navigator._navigation.navigate(screen, params);
};

export const popScreen = () => {
  _navigator._navigation.pop();
};

export const popToTop = () => {
  _navigator._navigation.popToTop();
};

export const replace = screen => {
  const resetAction = StackActions.reset({
    index: 0,
    key: null,
    actions: [NavigationActions.navigate({routeName: screen})],
  });
  _navigator._navigation.dispatch(resetAction);
};
