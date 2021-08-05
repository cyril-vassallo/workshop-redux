import axios from 'axios';

export const ADD = "ADD";
export const SUBTRACT = "SUBTRACT";
export const SET_USER = "SET_USER";
export const GET_USER = "GET_USER";


export const add = (payload) => {
    return {
        type: ADD,
        payload: payload,
      }
};

export const subtract = (payload) => {
    return {
        type: SUBTRACT,
        payload: payload,
      }
};

export const setUser = (payload) => {
    return {
        type: SET_USER,
        payload: payload
    }
}


export const getUser = (dispatch) => {
    axios.get('https://randomuser.me/api/')
        .then(res => {
            console.log(res.results[0])
        })
        .catch((res) => {

        })
    
}
