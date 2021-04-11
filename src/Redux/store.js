import { applyMiddleware, createStore } from 'redux';
import ThunkMiddleware from 'redux-thunk';
import rootReducer from './reducers';
const store = createStore(rootReducer, applyMiddleware(ThunkMiddleware));

export default store;
