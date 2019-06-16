import { combineReducers, applyMiddleware } from 'redux';
import { createStore, compose } from 'redux';
import reduxThunk from 'redux-thunk';
import teasReducer from "../reducers/teasReducer";
import userTeasReducer from "../reducers/userTeasReducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const storeReducers = combineReducers({
    listTeas: teasReducer,
    listUserTeas: userTeasReducer
});

const store = createStore(
    storeReducers,
    composeEnhancers(applyMiddleware(reduxThunk)),
);

export default store;