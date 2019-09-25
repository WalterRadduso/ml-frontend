import { SEARCH } from "../types";
import axios from 'axios';
import config from '../config';

export const search = () => {
    return (dispatch) => {
        axios.get(`${config.api.host}/search`).then( (result) => {
            dispatch({type: SEARCH, payload: result.data});
        })
    }
};
