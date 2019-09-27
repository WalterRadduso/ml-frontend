import { SEARCH } from "../types";
import axios from 'axios';
import config from '../config';

export const getItems = (searchText) => {
    return (dispatch) => {
        if (searchText) {
            axios.get(`${config.api.host}/search?q=${searchText}`).then( (result) => {
                dispatch({type: SEARCH, payload: result.data.data});
            });
        }

        dispatch({type: SEARCH, payload: { items: [] }});
    }
};
