// In App.js in a new project

import * as React from 'react';
import {StatusBar} from 'react-native';
import AppContainer from './src/containers/AppContainer';
import configureStore from './src/store/ConfigureStore';
import {Provider} from 'react-redux';
import sagas from './src/store/sagas';

const {store} = configureStore({});
sagas.forEach(saga => store.runSaga(saga));

function App() {
  console.disableYellowBox = true;
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#000072" />
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </>
  );
}

export default App;