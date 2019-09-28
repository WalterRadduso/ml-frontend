import { SEARCH } from "../types";
import axios from 'axios';
import config from '../config';

// Get the Items by a search text.
export const getItems = (searchText) => {
    return (dispatch) => {
        if (searchText) {
            axios
                .get(`${config.api.host}/items?q=${searchText}`)
                .then( (result) => {
                    let searchResult = result.data.data;

                    if (result.data.data.items.length === 0) {
                        searchResult = { items: [], result: 'empty' };
                    }

                    dispatch({type: SEARCH, payload: searchResult});
                })
                .catch((error) => {
                    dispatch({type: SEARCH, payload: { items: [], result: 'empty' }});
                });
        }

        dispatch({type: SEARCH, payload: { items: [] }});
    }
};
