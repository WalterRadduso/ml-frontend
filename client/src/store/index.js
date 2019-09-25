import { createStore, combineReducers, applyMiddleware } from "redux";
import searchReducer from '../reducers/search';
import itemsReducer from '../reducers/items';
import thunk from 'redux-thunk';

export default () => {
    return createStore(
        combineReducers({
            search: searchReducer,
            items: itemsReducer
        }),
        applyMiddleware(thunk));
};
