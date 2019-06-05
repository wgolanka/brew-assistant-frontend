import { combineReducers, applyMiddleware } from 'redux';
import { createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import teasReducer from "../reducers/teasReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeReducers = combineReducers({
    listTeas: teasReducer
});

const store = createStore(
    storeReducers,
    composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;