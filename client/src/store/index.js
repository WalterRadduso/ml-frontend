import { createStore, combineReducers, applyMiddleware } from "redux";
import reduxThunk from 'redux-thunk';

// Import Reducers
import searchReducer from '../reducers/search';
import itemsReducer from '../reducers/items';

export default () => {
    return createStore(
        combineReducers({
            search: searchReducer,
            items: itemsReducer
        }),
        applyMiddleware(reduxThunk));
};
