import { ITEMS } from "../types";
import axios from 'axios';
import config from '../config';

export const getItem = (itemID) => {
    return (dispatch) => {
        if (itemID) {
            axios.get(`${config.api.host}/items/${itemID}`).then((result) => {
                dispatch({ type: ITEMS, payload: result.data.data });
            });
        }

        dispatch({type: ITEMS, payload: [] });
    }
};
