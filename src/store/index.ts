import { createStore, applyMiddleware, compose, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { helloSaga } from './sagas';
import reducer from "./reducer";

const sagaMiddleware = createSagaMiddleware()

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware),
);


export const store: Store<ListState, ListAction> & {
  dispatch: DispatchType
} = createStore(reducer, enhancer)


sagaMiddleware.run(helloSaga);