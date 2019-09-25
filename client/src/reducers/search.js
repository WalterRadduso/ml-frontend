import { SEARCH } from "../types";

const defaultState = [];

export default (state = defaultState, action) => {
    if (action.type === SEARCH) {
        return { ...state, search: action.payload };
    } else {
        return state;
    }
};
