import { SEARCH } from "../types";

const defaultState = [];

export default (state = defaultState, action) => {
    if (action.type === SEARCH) {
        return { ...state, searchResult: action.payload };
    } else {
        return state;
    }
};
