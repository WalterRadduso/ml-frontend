import { ITEMS } from "../types";
import axios from 'axios';
import config from '../config';

export const getItem = (itemID) => {
    return (dispatch) => {
        axios.get(`${config.api.host}/item/${itemID}`).then( (result) => {
            dispatch({type: ITEMS, payload: result.data});
        })
    }
};
