import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';

export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(sagaMiddleware),
  );
  store.runSaga = sagaMiddleware.run;
  return {store};
}
