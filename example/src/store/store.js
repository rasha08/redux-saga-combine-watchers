import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import {imagesReducer, userReducer} from "./reducers";
import {rootSaga} from "./sagas";


const sagaMiddleware = createSagaMiddleware()

export const store = createStore(
    combineReducers({userReducer, imagesReducer}),
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga);
