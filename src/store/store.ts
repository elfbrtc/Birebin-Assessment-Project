import { applyMiddleware, combineReducers} from 'redux';
import { legacy_createStore as createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from '../sagas/matchSaga';
import rootReducer from '../reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
